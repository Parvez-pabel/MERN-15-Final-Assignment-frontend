import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const OtpVerify = () => {
  const navigate = useNavigate();
  const {
    isSuccess,
    isLoading,
    verifyOtp,
    otp,
    registerFormData,
    error,
    setOtp,
  } = useAuthStore();

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    const success = await verifyOtp();

    if (success) {
      setTimeout(() => {
        navigate("/signin");
      }, 1500); // Added 1.5s delay to let user read the success alert
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px-200px)] px-4 py-10">
      <form onSubmit={handleSubmitOtp} className="w-full max-w-xs mx-auto">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-full">
          <legend className="fieldset-legend">Otp Verification</legend>

          {/* Success Alert */}
          {isSuccess && (
            <div className="alert alert-success mb-4 text-sm">
              <span>OTP Verified! Redirecting to sign in...</span>
            </div>
          )}

          {/* Fixed: Changed alert-success to alert-error */}
          {error && (
            <div className="alert alert-error mb-4 text-sm">
              <span>{error}</span>
            </div>
          )}

          <label className="label text-xs text-gray-500">
            Enter the 6-digit code sent to{" "}
            <b>{registerFormData.email || "your email"}</b>
          </label>

          <input
            type="text"
            className="input input-bordered w-full text-center tracking-widest text-lg bg-base-100 text-base-content"
            placeholder="Enter OTP"
            value={otp || ""}
            maxLength={6}
            onChange={(e) => setOtp(e.target.value)}
            disabled={
              isLoading
            } /* Only disable while loading, NOT on isSuccess */
            required
          />

          <button
            type="submit"
            className={`btn btn-outline btn-success w-full mt-4 ${
              isLoading ? "loading" : ""
            }`}
            disabled={isLoading || isSuccess}
          >
            {isLoading ? "Verifying..." : "Submit"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default OtpVerify;
