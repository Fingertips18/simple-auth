import { Navigate, Outlet } from "react-router-dom";

import { LoadingSpinner } from "../components/loading-spinner";
import { useAuthStore } from "../stores/auth-store";
import { AppRoutes } from "../constants/routes";

const ProtectedGuard = () => {
  const { isVerifying, isAuthenticated, user } = useAuthStore();

  if (isVerifying) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to={AppRoutes.signIn} replace />;
  }

  if (!user.isVerified) {
    return <Navigate to={AppRoutes.verifyEmail} replace />;
  }

  return <Outlet />;
};

export default ProtectedGuard;
