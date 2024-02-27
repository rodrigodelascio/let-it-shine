import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ServicesHero from "../components/servicesPage/hero/ServicesHero";
import ServicesSection from "../components/servicesPage/servicesSection/ServicesSection";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <ServicesHero />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
