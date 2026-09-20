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

export const RoleBaseRoutes = ({ allowedRoles = [] }) => {
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  const userRole = user.role?.trim().toLowerCase();
  const normalizedAllowedRoles = allowedRoles.map((role) =>
    role.trim().toLowerCase(),
  );

  const isAllowed = normalizedAllowedRoles.includes(userRole);

  return isAllowed ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};
