import { Nav } from "./components/nav";
import { Home } from "./pages/home";
import { Stats } from "./components/stats";
import { Announce } from "./components/anouncements";
import { Staff } from "./components/staff";
import { Schedule } from "./components/schedule";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Stats />
      <Announce />
      <Staff />
      <Schedule />
    </>
  );
}

export default App;
