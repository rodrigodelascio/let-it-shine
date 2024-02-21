import styles from "./ContactHero.module.css";

const ContactHero = () => {
  return (
    <div>
      <div className={styles["hero-image-wrapper"]}>
        <h1 className={styles["page-title"]}>Contact us</h1>
      </div>
    </div>
  );
};

export default ContactHero;
