import React from "react";
import NavBar from "../common/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      {/* Fixed/Sticky Top Navigation */}
      <header className="w-full z-50">
        <NavBar />
      </header>

      {/* Main Content Area - Expands to fill available space */}
      <main className="grow w-full">
        <Outlet />
      </main>

      {/* Footer stays at the bottom */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
