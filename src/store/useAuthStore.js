import { create } from "zustand";
import { api } from "../api/axiosInstance";

export const useAuthStore = create((set, get) => ({
  //STATES
  user: null,
  isAuthenticated: false,
  otp: "",
  isLoading: false,
  error: null,
  isSuccess: false,

  //user er input kora form er data newar jonno
  registerFormData: {
    name: "",
    email: "",
    password: "",
  },

  loginFormData: {
    email: "",
    password: "",
  },

  //input change handler
  setRegisterFormField: (field, value) =>
    set((state) => ({
      registerFormData: { ...state.registerFormData, [field]: value },
      error: null,
    })),
  setOtp: (value) => set({ otp: value, error: null }), //1-vul ekhane hoyeche

  setLoginFormField: (field, value) =>
    set((state) => ({
      loginFormData: { ...state.loginFormData, [field]: value },
      error: null,
    })),

  resetRegForm: () => ({
    registerFormData: { name: "", email: "", password: "" },
    otp: "",
    isLoading: false,
    error: null,
    isSuccess: false,
  }),
  // this state for user registration
  registerUser: async () => {
    const { registerFormData } = get();
    //validation

    if (
      !registerFormData.name ||
      !registerFormData.email ||
      !registerFormData.password
    ) {
      set({ error: "All fields are required." });
      return false;
    }
    set({
      isLoading: false,
      isLoading: true,
      error: null,
      isSuccess: false,
    });

    try {
      const response = await api.post("/user/registration", registerFormData);
      set({
        isLoading: false,
        // etar dhara email take reset kora hocche na karon next page a otp verify korar jonno lagbe
      });
      return true;
    } catch (err) {
      set({
        isLoading: false,
        error:
          err.response?.data?.message ||
          (err.code === "ECONNABORTED" ?
            "Request timed out. Please try again."
          : "Registration failed."),
      });
      return false;
    }
  },
  // this state for user  otp verification
  verifyOtp: async () => {
    const { registerFormData, otp } = get();
    if (!otp) {
      set({ error: "Please enter the OTP code." });
      return false;
    }
    set({
      isLoading: true,
      error: null,
    });

    try {
      //encodeURIComponent etar dhara special email er moddyer character gulur jonno jeno Safe URL Character-convert kore
      const encodedEmail = encodeURIComponent(registerFormData.email);
      const encodedOtp = encodeURIComponent(otp);
      const response = await api.get(
        `/user/verify-otp/${encodedEmail}/${encodedOtp}`,
      );

      set({
        isLoading: false,
        isSuccess: true,
        registerFormData: { name: "", email: "", password: "" },
        otp: "",
      });
      return true;
    } catch (err) {
      set({
        isLoading: false,
        error: err.response?.data?.message || "Invalid OTP! Please try again.",
      });
      return false;
    }
  },
  // this state for user  login

  login: async () => {
    const { loginFormData } = get();
    //validation
    if (!loginFormData.email || !loginFormData.password) {
      set({
        error: "Email and password are required.",
      });
      return null;
    }
    set({
      isLoading: true,
      error: null,
    });

    try {
      const response = await api.post("/user/login", loginFormData);
      const userData = response.data.user || response.data.data;
      console.log(userData);

      set({
        user: userData,
        isAuthenticated: true,
        isLoading: false,
        loginFormData: { email: "", password: "" },
      });
      return userData;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.message || "Login failed.",
      });
      return null;
    }
  },

  //AUTHENTICATION
  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get("/user/profile-details");
      console.log(response);
      set({
        user: response.data.user || response.data.data,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  // logout: async () => {
  //   try {

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}));
