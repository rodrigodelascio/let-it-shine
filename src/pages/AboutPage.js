import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AboutHero from "../components/aboutPage/hero/AboutHero";
import AboutText from "../components/aboutPage/aboutText/AboutText";
import MissionText from "../components/aboutPage/missionText/MissionText";
import AboutCardsSection from "../components/aboutPage/cardsSection/AboutCardsSection";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutText />
      <MissionText />
      <AboutCardsSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
