import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OtpVerify from "./pages/OtpVerify";
import NewsDetails from "./pages/NewsDetails";
import NewsList from "./pages/NewsList";
import Dashboard from "./pages/Dashboard";
import { useAuthStore } from "./store/useAuthStore";
import {
  ProtectedRoute,
  RoleBaseRoutes,
} from "./components/layout/ProtectedRoute";
import { useEffect } from "react";

const App = () => {
  const { checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/otp-verify" element={<OtpVerify />} />
            <Route path="/News-details" element={<NewsDetails />} />
            <Route path="/all-news" element={<NewsList />} />

            <Route element={<ProtectedRoute />}>
              <Route
                element={
                  <RoleBaseRoutes
                    allowedRoles={["super admin", "author", "user"]}
                  />
                }
              >
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
