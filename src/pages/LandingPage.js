import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import LandingHero from "../components/landingPage/hero/LandingHero";
import LandingServices from "../components/landingPage/services/LandingServices";
import LandingProjects from "../components/landingPage/projects/LandingProjects";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <LandingHero />
      <LandingServices />
      <LandingProjects />
      <Footer />
    </div>
  );
};

export default LandingPage;
