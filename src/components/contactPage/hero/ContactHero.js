import styles from "./ContactHero.module.css";
const ContactHero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["contact-text-wrapper"]}>
        <h1>Get In Touch</h1>
        <h2>Let us know how we can help and we'll get back to you ASAP</h2>
      </div>
    </div>
  );
};

export default ContactHero;
