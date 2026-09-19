import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import Loader from "../components/skeleton/loader";

const Login = () => {
  const navigate = useNavigate();
  const { login, loginFormData, setLoginFormField, error, isLoading } =
    useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login();
    if (user) {
      if (user.role?.trim() === "super admin") {
        navigate("/dashboard");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-xs bg-base-200 p-6 rounded-box shadow-lg"
      >
        {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
         
        </fieldset> */}
        <legend className="fieldset-legend ">Login</legend>
        {error && (
          <div className="alert alert-error mb-4 text-sm py-2 px-3 rounded">
            <span>{error}</span>
          </div>
        )}

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={loginFormData.email}
          onChange={(e) => setLoginFormField("email", e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={loginFormData.password}
          onChange={(e) => setLoginFormField("password", e.target.value)}
        />

        <button
          className="btn btn-outline btn-primary mt-4"
          disabled={isLoading}
        >
          {isLoading ?
            <Loader />
          : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
