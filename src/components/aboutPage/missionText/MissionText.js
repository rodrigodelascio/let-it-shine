import styles from "./MissionText.module.css";
import { Link } from "react-router-dom";
import { BsDashLg } from "react-icons/bs";

const MissionText = () => {
  return (
    <div className={styles["section-background-container"]}>
      <div className={styles["mission-section-container"]}>
        <div className={styles["mission-image-container"]}>
          <iframe
            src="https://lottie.host/embed/499ec791-9a2e-4786-aa6d-3a28909f82dd/39X5OHX8ev.json"
            className={styles["mission-animation"]}
            title="mission animation"
          />
        </div>
        <div className={styles["mission-text-container"]}>
          <div className={styles["mission-header-container"]}>
            <BsDashLg className={styles["dash-icon"]} />
            <h2 className={styles["header-title"]}>Our Mission</h2>
          </div>
          <h3 className={styles["header-subtitle"]}>
            We Aim to Illuminate <span>Every Space</span>, Elevate
            <span> Every Experience</span>
          </h3>
          <div>
            <div className={styles["mission-text"]}>
              <p>
                At Let It Shine, our mission is simple yet profound: to
                transform spaces into beacons of sparkling cleanliness and
                serene comfort, empowering individuals and businesses to thrive.
              </p>
              <p>
                We believe that a clean environment fosters not just a visually
                pleasing aesthetic, but also a sense of well-being,
                productivity, and peace of mind. We strive to illuminate every
                corner, not just with spotless surfaces, but with the confidence
                and comfort that comes from knowing your space is cared for.
              </p>

              <p>
                Let It Shine isn't just about cleaning surfaces; it's about
                illuminating the potential within every space, enabling
                individuals and businesses to shine brighter. Join us on this
                mission of cleanliness and well-being.{" "}
                <Link to="/contact" className={styles["link"]}>
                  Contact Let It Shine today
                </Link>{" "}
                and let us help your space and your life truly shine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionText;
