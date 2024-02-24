import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AboutHero from "../components/aboutPage/hero/AboutHero";
import AboutText from "../components/aboutPage/aboutText/AboutText";
import MissionText from "../components/aboutPage/missionText/MissionText";
import AboutCards from "../components/aboutPage/cardsSection/AboutCards";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutText />
      <MissionText />
      <AboutCards />
      <Footer />
    </div>
  );
};

export default AboutPage;
