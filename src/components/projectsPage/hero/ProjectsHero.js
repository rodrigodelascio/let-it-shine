import styles from "./ProjectsHero.module.css";
const ProjectsHero = () => {
  return (
    <div>
      <div className={styles["hero-image-wrapper"]}>
        <h1 className={styles["page-title"]}>Our Projects</h1>
      </div>
    </div>
  );
};

export default ProjectsHero;
