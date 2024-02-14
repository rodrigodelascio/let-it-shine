import styles from "./ContactHero.module.css";
import cleaningBucket from "../../../assets/images/cleaningBucket.png";
const ContactHero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["contact-text-wrapper"]}>
        <h1>We are here for you</h1>
        <h2>Let us know how we can help and we'll get back to you ASAP</h2>
        {/* <div className={styles["hero-image-wrapper"]}>
          <img
            src={cleaningBucket}
            alt="cleaning bucket"
            className={styles["hero-image"]}
          />
        </div> */}
      </div>
      <div className={styles["lower-section-container"]}>
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
        <div className={styles["contact-details-wrapper"]}>
          <h3>Get In Touch</h3>
          <p>
            Don't hesitate to contact us, we'd love to hear from you. Ask us
            anything, don't be shy. We are here for you, and to make your space
            clean. Let It Shine!
          </p>
          <h3>Our Location</h3>
          <p>
            We don't have a physical office, but our main base is in
            Walton-On-Thames.
          </p>
          <h3>Contact Details</h3>
          <p>Email: 9D6zH@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
