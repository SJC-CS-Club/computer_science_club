import { Nav } from "./components/nav";
import { Home } from "./pages/home";
import { Stats } from "./components/stats";
import { Announce } from "./components/anouncements";
import { Staff } from "./components/staff";
import { Schedule } from "./components/schedule";
import { Location } from "./components/location";
import { Feedback } from "./components/feedback";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Stats />
      <Announce />
      <Staff />
      <Schedule />
      <Location />
      {/* <Feedback /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
