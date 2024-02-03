import styles from "./LandingHero.module.css";
import {
  BiLogoInstagramAlt,
  BiLogoFacebook,
  BiLogoYoutube,
} from "react-icons/bi";
const LandingHero = () => {
  return (
    <div className={styles["hero-wrapper"]}>
      <section className={styles["hero-container"]}>
        <h1>Professional cleaning service</h1>
        <h2>For your workplace or home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className={styles["hero-buttons-wrapper"]}>
          <button className={styles["hero-button-a"]}>BUTTON 1</button>
          <button className={styles["hero-button-b"]}>BUTTON 2</button>
        </div>
      </section>
      <section className={styles["hero-socials"]}>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <BiLogoInstagramAlt className={styles["social-icon"]} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <BiLogoFacebook className={styles["social-icon"]} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <BiLogoYoutube className={styles["social-icon"]} />
        </a>
      </section>
    </div>
  );
};

export default LandingHero;
