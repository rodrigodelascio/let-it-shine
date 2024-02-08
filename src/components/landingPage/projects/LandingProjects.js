import styles from "./LandingProjects.module.css";
import ProjectCard from "./ProjectCard";

const LandingProjects = () => {
  return (
    <div className={styles["projects-wrapper"]}>
      <div className={styles["projects-header-container"]}>
        <h1>We have a variety of projects you might be interested in</h1>
      </div>
      <div className={styles["projects-cards-container"]}>
        <ProjectCard projectTitle={"Lorem ipsum dolor sit amet consectetur"} />
        <ProjectCard projectTitle={"Lorem ipsum dolor sit amet consectetur"} />
        <ProjectCard projectTitle={"Lorem ipsum dolor sit amet consectetur"} />
      </div>
    </div>
  );
};

export default LandingProjects;
