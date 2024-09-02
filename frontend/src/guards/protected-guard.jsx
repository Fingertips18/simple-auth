import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

import { useAuthStore } from "../stores/auth-store";
import { AppRoutes } from "../constants/routes";

const ProtectedGuard = () => {
  const { verifyToken, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (!isAuthenticated) {
    return <Navigate to={AppRoutes.signIn} replace />;
  }

  if (!user.isVerified) {
    return <Navigate to={AppRoutes.verifyEmail} replace />;
  }

  return <Outlet />;
};

export default ProtectedGuard;
