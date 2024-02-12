import styles from "./ContactHero.module.css";
import cleaningBucket from "../../../assets/images/cleaningBucket.png";
const ContactHero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["contact-text-wrapper"]}>
        <h1>We are here for you</h1>
        <h2>Let us know how we can help and we'll get back to you ASAP</h2>
        <div className={styles["hero-image-wrapper"]}>
          <img
            src={cleaningBucket}
            alt="cleaning bucket"
            className={styles["hero-image"]}
          />
        </div>
      </div>
      <div className={styles["form-wrapper"]}>
        <form>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <div className={styles["form-submit-button-wrapper"]}>
            <input
              type="submit"
              value="Send"
              className={styles["form-submit-button"]}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactHero;
