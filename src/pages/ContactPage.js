import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ContactHero from "../components/contactPage/hero/ContactHero";
import FormSection from "../components/contactPage/formSection/FormSection";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <FormSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
