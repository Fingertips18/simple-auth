import { Route, Routes } from "react-router-dom";

import { AppRoutes } from "./constants/routes";
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
      </Routes>
    </main>
  );
}

export default App;
