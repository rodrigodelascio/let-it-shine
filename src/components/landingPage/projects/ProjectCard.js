import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const ProjectCard = ({ cardImage, projectTitle }) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-image-container"]}>{cardImage}</div>
      <div className={styles["card-text-container"]}>
        <h3>{projectTitle}</h3>
        <Link to="/projects">
          <div className={styles["card-link"]}>
            <p className={styles["card-link-text"]}>Read more</p>
            <GoArrowUpRight className={styles["arrow-up-icon"]} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
