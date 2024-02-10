import styles from "./LandingProjects.module.css";
import ProjectCard from "./ProjectCard";
import spongeClean from "../../../assets/images/spongeClean.jpg";
import handsClean from "../../../assets/images/handsCleaning.jpg";
import prodsClean from "../../../assets/images/prodsClean.jpg";

const LandingProjects = () => {
  return (
    <div className={styles["projects-wrapper"]}>
      <div className={styles["projects-header-container"]}>
        <h1>
          You might be interested in <br />
          <span>a variety of our projects</span>
        </h1>
        <div className={styles["projects-polka-dots"]}></div>
      </div>
      <div className={styles["projects-cards-container"]}>
        <ProjectCard
          projectTitle={"Lorem ipsum dolor sit amet consectetur"}
          cardImage={<img src={prodsClean} alt="cleaning products" />}
        />
        <ProjectCard
          projectTitle={"Lorem ipsum dolor sit amet consectetur"}
          cardImage={<img src={handsClean} alt="hands cleaning a desk" />}
        />
        <ProjectCard
          projectTitle={"Lorem ipsum dolor sit amet consectetur"}
          cardImage={<img src={spongeClean} alt="sponge cleaning surface" />}
        />
      </div>
    </div>
  );
};

export default LandingProjects;
