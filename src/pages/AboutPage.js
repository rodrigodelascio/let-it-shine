import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AboutHero from "../components/aboutPage/hero/AboutHero";
import AboutText from "../components/aboutPage/aboutText/AboutText";
import MissionText from "../components/aboutPage/missionText/MissionText";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutText />
      <MissionText />
      <Footer />
    </div>
  );
};

export default AboutPage;
