import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AboutHero from "../components/aboutPage/hero/AboutHero";
import AboutText from "../components/aboutPage/aboutText/AboutText";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutText />
      <Footer />
    </div>
  );
};

export default AboutPage;
