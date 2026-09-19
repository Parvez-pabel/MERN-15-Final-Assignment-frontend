import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  //initializing useAuthStore
  const {
    registerFormData,
    setRegisterFormField,
    registerUser,
    isSuccess,
    error,
    isLoading,
  } = useAuthStore();

  //submit button handle

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpSent = await registerUser();
    if (otpSent) {
      navigate("/otp-verify");
    }
  };

  return (
    <div className="flex justify-content-center items-center min-h-[calc(100vh-80px-200px)] px-4 py-10 ">
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
          <legend className="fieldset-legend ">Register</legend>
          {/* Success Alert */}
          {isSuccess && (
            <div className="alert alert-success mb-4 text-sm">
              <span>Registration processing! Verify your otp.</span>
            </div>
          )}

          {/* Error Alert */}
          {error && (
            <div className="alert alert-error mb-4 text-sm">
              <span>{error}</span>
            </div>
          )}

          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            placeholder="Name"
            value={registerFormData.name}
            onChange={(e) => setRegisterFormField("name", e.target.value)}
            disabled={isLoading}
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={registerFormData.email}
            onChange={(e) => setRegisterFormField("email", e.target.value)}
            disabled={isLoading}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={registerFormData.password}
            onChange={(e) => setRegisterFormField("password", e.target.value)}
            disabled={isLoading}
          />

          <button
            type="submit"
            className={`btn btn-primary w-full mt-4 ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "OTP sending to your mail..." : "Register"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
