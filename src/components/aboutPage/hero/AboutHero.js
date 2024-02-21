import styles from "./AboutHero.module.css";
const AboutHero = () => {
  return (
    <div>
      <div className={styles["hero-image-wrapper"]}>
        <h1 className={styles["page-title"]}>About us</h1>
      </div>
    </div>
  );
};

export default AboutHero;
