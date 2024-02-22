import styles from "./AboutText.module.css";
import { BsDashLg } from "react-icons/bs";

const AboutText = () => {
  return (
    <div className={styles["about-section-wrapper"]}>
      <div className={styles["about-header-container"]}>
        <BsDashLg className={styles["dash-icon"]} />
        <h2 className={styles["header-title"]}>Our Story</h2>
      </div>
      <h3 className={styles["header-subtitle"]}>
        Let It Shine: Bringing Brilliance to <span>Homes and Businesses</span>
      </h3>
      <div className={styles["about-text-container"]}>
        <div className={styles["about-text"]}>
          <p>
            At Let It Shine, we're passionate about transforming spaces into
            havens of sparkling cleanliness and comfort. We're a local,
            Walton-on-Thames based cleaning service dedicated to exceeding
            expectations for both residential and commercial properties.
          </p>
          <p>
            Let It Shine was born from a desire to provide unparalleled cleaning
            services with a personal touch. We believe that clean spaces
            shouldn't be a luxury, but a standard for everyone to enjoy. That's
            why we offer a range of customized cleaning solutions tailored to
            your specific needs and budget.
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
        <div className={styles["about-image-container"]}></div>
      </div>
    </div>
  );
};

export default AboutText;