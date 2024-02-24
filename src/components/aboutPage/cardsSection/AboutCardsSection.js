import styles from "./AboutCardsSection.module.css";
import { Link } from "react-router-dom";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { BsCalendar2DayFill, BsFillPiggyBankFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

const AboutCardsSection = () => {
  return (
    <div className={styles["section-background-container"]}>
      <div className={styles["about-cards-container"]}>
        <div className={styles["card-section-title"]}>
          <h2>Our differentials and strengths</h2>
        </div>
        <div className={styles["cards-wrapper"]}>
          <div className={styles["card"]}>
            <RiTeamFill className={styles["card-icon"]} />
            <h3 className={styles["card-title"]}>Our Team</h3>
            <p className={styles["card-text"]}>
              Our cleaners are treated with care and are fully trained to
              provide the best service
            </p>
          </div>
          <div className={styles["card"]}>
            <FaSprayCanSparkles className={styles["card-icon"]} />
            <h3 className={styles["card-title"]}>Our Products</h3>
            <p className={styles["card-text"]}>
              We have our own mixture that will leave a great scent and a
              lasting impression
            </p>
          </div>
          <div className={styles["card"]}>
            <BsCalendar2DayFill className={styles["card-icon"]} />
            <h3 className={styles["card-title"]}>Our Flexibility</h3>
            <p className={styles["card-text"]}>
              We work around your busy schedule to find a time that works best
              for both parties
            </p>
          </div>
          <div className={styles["card"]}>
            <BsFillPiggyBankFill className={styles["card-icon"]} />
            <h3 className={styles["card-title"]}>Our Prices</h3>
            <p className={styles["card-text"]}>
              We're committed to offer fair pricing, building long-term
              relationships with our clients
            </p>
          </div>
        </div>
        <Link to="/contact" className={styles["button-wrapper"]}>
          <button className={styles["about-card-button"]}>
            Get your quote
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutCardsSection;
