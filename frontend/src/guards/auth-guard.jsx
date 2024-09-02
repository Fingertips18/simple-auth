import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../stores/auth-store";
import { AppRoutes } from "../constants/routes";

const AuthGuard = () => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to={AppRoutes.root} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
