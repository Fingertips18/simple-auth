import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import VerifyEmailPage from "./pages/verify-email/page";
import ProtectedGuard from "./guards/protected-guard";
import { AppRoutes } from "./constants/routes";
import SignUpPage from "./pages/sign-up/page";
import SignInPage from "./pages/sign-in/page";
import AuthGuard from "./guards/auth-guard";
import RootPage from "./pages/root/page";
import { Grid } from "./components/grid";
import { Orb } from "./components/orb";

function App() {
  return (
    <main className="min-h-dvh flex-center bg-background overflow-hidden relative">
      <Orb />
      <Grid />
      <Routes>
        <Route element={<ProtectedGuard />}>
          <Route path={AppRoutes.root} element={<RootPage />} />
        </Route>
        <Route element={<AuthGuard />}>
          <Route path={AppRoutes.signUp} element={<SignUpPage />} />
          <Route path={AppRoutes.signIn} element={<SignInPage />} />
        </Route>
        <Route path={AppRoutes.verifyEmail} element={<VerifyEmailPage />} />
      </Routes>
      <Toaster richColors position="top-center" pauseWhenPageIsHidden />
    </main>
  );
}

export default App;
