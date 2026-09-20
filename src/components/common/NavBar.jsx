import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "./../../store/useAuthStore";

const NavBar = () => {
  const { user, logout } = useAuthStore?.() || {};
  // Helper function to handle active state dynamic classes
  const linkClasses = ({ isActive }) =>
    isActive ?
      "bg-primary text-primary-content font-semibold rounded-lg" // Active tab style
    : "hover:bg-base-300 text-base-content"; // Inactive tab style

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-news" className={linkClasses}>
          All News
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" className={linkClasses}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className={linkClasses}>
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md px-4 sm:px-8">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>

      {/* Main Navbar */}
      <div className="collapse-title navbar p-0">
        <div className="navbar-start">
          <label
            htmlFor="navbar-1-toggle"
            className="btn btn-ghost lg:hidden mr-2"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Link to="/" className="text-xl font-bold tracking-wide">
            IceCream
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>

        {/* Sign In / Sign Up */}
        {/* 🔐 Conditional Buttons (Sign In/Up VS Dashboard & Logout) */}
        <div className="navbar-end gap-2">
          {
            user ?
              // 🟢 User Login থাকলে এই বাটনগুলো দেখাবে
              <>
                <Link
                  to="/dashboard"
                  className="btn btn-xs sm:btn-sm btn-primary"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="btn btn-xs sm:btn-sm btn-outline btn-error"
                >
                  Logout
                </button>
              </>
              // 🔴 User Login না থাকলে Sign In এবং Sign Up দেখাবে
            : <>
                <Link to="/signin" className="btn btn-primary btn-xs sm:btn-sm">
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-xs sm:btn-sm btn-outline btn-primary"
                >
                  Sign Up
                </Link>
              </>

          }
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="collapse-content lg:hidden z-10">
        <ul className="menu menu-compact gap-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default NavBar;
