import { Navigate, Outlet } from "react-router-dom";

import { LoadingSpinner } from "../components/loading-spinner";
import { useAuthStore } from "../stores/auth-store";
import { AppRoutes } from "../constants/routes";

const AuthGuard = () => {
  const { isVerifying, isAuthenticated, user } = useAuthStore();

  if (isVerifying) {
    return <LoadingSpinner />;
  }

  if (isAuthenticated && user.isVerified) {
    return <Navigate to={AppRoutes.root} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
