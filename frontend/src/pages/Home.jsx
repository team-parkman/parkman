import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import About from "../components/About";
import Services from "../components/Services";
import PopularLots from "../components/PopularLots";
import MissionAndVision from "../components/MissionAndVision";
import Contact from "../components/Contact";
import FeedBack from "../components/FeedBack";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="  ">
      <div>
        <Hero />
      </div>
      <div>
        <PopularLots />
      </div>
      {/* <Popular /> */}
      <About />
      <Services />
      <MissionAndVision />
      <Contact />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default Home;
