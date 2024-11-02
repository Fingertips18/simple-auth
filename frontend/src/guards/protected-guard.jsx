import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

import { LoadingSpinner } from "@/components/loading-spinner";
import { AuthService } from "@/lib/services/auth.service";
import { useAuthStore } from "@/lib/stores/authStore";
import { useFetch } from "@/lib/hooks/useFetch";
import { AppRoutes } from "@/constants/routes";

const ProtectedGuard = () => {
  const { authorized, setUser, user } = useAuthStore();
  const { loading, data } = useFetch(AuthService.verifyToken);

  useEffect(() => {
    if (data) {
      setUser(data.user);
    }
  }, [setUser, data]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!authorized) {
    return <Navigate to={AppRoutes.signIn} replace />;
  }

  if (!user.isVerified) {
    return <Navigate to={AppRoutes.verifyEmail} replace />;
  }

  return <Outlet />;
};

export default ProtectedGuard;
