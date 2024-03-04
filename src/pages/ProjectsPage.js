import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProjectsHero from "../components/projectsPage/hero/ProjectsHero";
import ProjectSection from "../components/projectsPage/projectSection/ProjectSection";

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <ProjectsHero />
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
