import styles from "./LandingProjects.module.css";

const LandingProjects = () => {
  return (
    <div className={styles["projects-container"]}>
      <div className={styles["projects-wrapper"]}>
        <div className={styles["projects-header-container"]}>
          <h2>
            You might be interested
            <br />
            <span>in our projects</span>
          </h2>
        </div>
        <div className={styles["projects-description-container"]}>
          <div className={styles["projects-description-wrapper"]}>
            <h3>Brushes Across Borders: Connecting Global Kids</h3>
            <p>
              Our project was born from a desire to foster empathy and kindness
              among children from diverse backgrounds across the globe. We also
              aim to inspire adults to contemplate the future, considering the
              varied realities children face around the world.
            </p>
          </div>
          <div className={styles["projects-image-wrapper"]}></div>
        </div>
      </div>
    </div>
  );
};

export default LandingProjects;
