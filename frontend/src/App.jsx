import { Grid } from "./components/grid";
import { Orb } from "./components/orb";

function App() {
  return (
    <main className="min-h-dvh flex-center bg-background overflow-hidden relative">
      <Orb />
      <Grid />
    </main>
  );
}

export default App;
