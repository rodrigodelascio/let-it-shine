import styles from "./LandingHero.module.css";
import {
  BiLogoInstagramAlt,
  BiLogoFacebook,
  BiLogoYoutube,
  BiMouse,
} from "react-icons/bi";
const LandingHero = () => {
  return (
    <div className={styles["hero-wrapper"]}>
      <section className={styles["hero-container"]}>
        <h1>Cleaning services</h1>
        <h2>For your workplace or home</h2>
        <p>
          Let It Shine! Elevate your environment with our expert touch, because
          your space deserves to shine as bright as you do. Discover a new
          standard of clean with us.
        </p>
        <div className={styles["hero-buttons-wrapper"]}>
          <button className={styles["hero-button-a"]}>BUTTON 1</button>
          <button className={styles["hero-button-b"]}>BUTTON 2</button>
        </div>
      </section>
      <section className={styles["hero-lower-section-container"]}>
        <div className={styles["hero-socials"]}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BiLogoInstagramAlt className={styles["social-icon"]} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <BiLogoFacebook className={styles["social-icon"]} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <BiLogoYoutube className={styles["social-icon"]} />
          </a>
        </div>
        <div className={styles["hero-scroll-down-container"]}>
          <p className={styles["scroll-down-text"]}>Scroll down</p>
          <BiMouse className={styles["scroll-down-icon"]} />
        </div>
      </section>
    </div>
  );
};

export default LandingHero;
