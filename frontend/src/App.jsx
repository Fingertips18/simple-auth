import { Route, Routes } from "react-router-dom";

import { AppRoutes } from "./constants/routes";
import SignUpPage from "./pages/sign-up/page";
import RootPage from "./pages/root/page";
import { Grid } from "./components/grid";
import { Orb } from "./components/orb";

function App() {
  return (
    <main className="min-h-dvh flex-center bg-background overflow-hidden relative">
      <Orb />
      <Grid />
      <Routes>
        <Route path={AppRoutes.root} element={<RootPage />} />
        <Route path={AppRoutes.signUp} element={<SignUpPage />} />
      </Routes>
    </main>
  );
}

export default App;
