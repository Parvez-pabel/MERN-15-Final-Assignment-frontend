import { Navigate, Outlet, useActionData } from "react-router-dom";
import Loader from "../skeleton/loader";
import { useAuthStore } from "../../store/useAuthStore";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuthStore();
  if (isLoading)
    return (
      <div className="p-10 text-center">
        <Loader />
      </div>
    );
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

export const RoleBaseRoutes = ({ allowedRoles }) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  const userRole = user.role?.trim();
  return allowedRoles.includes(userRole) ?
      <Outlet />
    : <Navigate to="/unauthorized" replace />;
};
