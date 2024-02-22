import styles from "./AboutText.module.css";
import { BsDashLg } from "react-icons/bs";

const AboutText = () => {
  return (
    <div className={styles["about-section-wrapper"]}>
      <div className={styles["about-header-container"]}>
        <BsDashLg className={styles["dash-icon-one"]} />
        <h2 className={styles["header-title-one"]}>Our Story</h2>
      </div>
      <h3 className={styles["header-subtitle-one"]}>
        Let It Shine: Bringing Brilliance to <span>Homes and Businesses</span>
      </h3>
      <div className={styles["story-text-container"]}>
        <p>
          At Let It Shine, we're passionate about transforming spaces into
          havens of sparkling cleanliness and comfort. We're a local,
          Walton-on-Thames based cleaning service dedicated to exceeding
          expectations for both residential and commercial properties.
        </p>
        <p>
          Let It Shine was born from a desire to provide unparalleled cleaning
          services with a personal touch. We believe that clean spaces shouldn't
          be a luxury, but a standard for everyone to enjoy. That's why we offer
          a range of customized cleaning solutions tailored to your specific
          needs and budget.
        </p>
        <p>
          Whether you're a busy homeowner looking for a break from the
          housework, a landlord needing a deep clean for a new tenant, or a
          business owner seeking a reliable cleaning partner, we're here to
          help.
        </p>
        <p>
          When you choose Let It Shine, you're choosing more than just a
          cleaning service. You're choosing peace of mind, knowing that your
          home or business is in the hands of professionals who care.
        </p>
      </div>
      <div className={styles["about-header-container"]}>
        <BsDashLg className={styles["dash-icon-two"]} />
        <h2 className={styles["header-title-two"]}>Our Mission</h2>
      </div>
      <h3 className={styles["header-subtitle-two"]}>
        Our Mission: Illuminate <span>Every Space</span>, Elevate
        <span> Every Experience</span>
      </h3>
      <div className={styles["story-text-container"]}>
        <p>
          At Let It Shine, our mission is simple yet profound: to transform
          spaces into beacons of sparkling cleanliness and serene comfort,
          empowering individuals and businesses to thrive.
        </p>
        <p>
          We believe that a clean environment fosters not just a visually
          pleasing aesthetic, but also a sense of well-being, productivity, and
          peace of mind. We strive to illuminate every corner, not just with
          spotless surfaces, but with the confidence and comfort that comes from
          knowing your space is cared for.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
