import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShieldAlt, FaArrowLeft, FaHome } from "react-icons/fa";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-base-100 p-8 rounded-2xl shadow-xl border border-base-300">
        {/* Warning Icon Badge */}
        <div className="w-20 h-20 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto mb-6">
          <FaShieldAlt size={40} />
        </div>

        {/* Error Code & Title */}
        <span className="badge badge-error badge-outline font-semibold mb-3">
          403 Access Denied
        </span>
        <h1 className="text-3xl font-extrabold text-base-content mb-2">
          Unauthorized Access
        </h1>

        {/* Message */}
        <p className="text-base-content/70 mb-8 text-sm sm:text-base">
          You don't have permission to view this page. Please contact your
          administrator if you believe this is a mistake.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline gap-2 w-full sm:w-auto"
          >
            <FaArrowLeft size={14} /> Go Back
          </button>
          <Link to="/" className="btn btn-primary gap-2 w-full sm:w-auto">
            <FaHome size={16} /> Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
