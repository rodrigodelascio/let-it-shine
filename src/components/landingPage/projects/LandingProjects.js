import styles from "./LandingProjects.module.css";
import { Link } from "react-router-dom";
import friendshipCutout from "../../../assets/images/friendshipCutout.jpeg";

const LandingProjects = () => {
  return (
    <div className={styles["projects-container"]}>
      <div className={styles["projects-wrapper"]}>
        <div className={styles["projects-header-container"]}>
          <h2>
            You might be interested
            <br />
            <span>in our social project</span>
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
            <p>
              We were thrilled to launch our first exhibition at the Riverhouse
              Barn Arts Centre in Walton-on-Thames. This showcase featured a
              vibrant collection of paintings from children in Nairobi, Kenya,
              the Amazon rainforest in Brazil, and our very own Walton-on-Thames
              community in the UK.
            </p>
            <div className={styles["projects-button-wrapper"]}>
              <Link to="/projects">
                <button className={styles["projects-button"]}>
                  Learn More{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className={styles["projects-image-wrapper"]}>
            <img
              src={friendshipCutout}
              alt="friendship cutout"
              className={styles["projects-image"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingProjects;
