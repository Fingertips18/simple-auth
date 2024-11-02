import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/lib/stores/authStore";
import { AppRoutes } from "@/constants/routes";

const AuthGuard = () => {
  const { authorized, user } = useAuthStore();

  if (authorized && user.isVerified) {
    return <Navigate to={AppRoutes.root} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
