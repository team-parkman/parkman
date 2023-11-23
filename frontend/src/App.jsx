import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import About from "./components/About";
import Services from "./components/Services";
import MissionAndVision from "./components/MissionAndVision";
import Contact from "./components/Contact";
import FeedBack from "./components/FeedBack";
import Footer from "./components/Footer";

import PopularLots from "./components/PopularLots";

function App() {
  return (
    <div className="w-screen h-screen bg-background">
      <NavBar />
      <Hero />
      <PopularLots/>
      <Popular />
      <About />
      <Services />
      <MissionAndVision />
      <Contact />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default App;
