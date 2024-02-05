import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import LandingHero from "../components/landingPage/hero/LandingHero";
import LandingServices from "../components/landingPage/services/LandingServices";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <LandingHero />
      <LandingServices />
      <Footer />
    </div>
  );
};

export default LandingPage;
