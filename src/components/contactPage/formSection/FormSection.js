import styles from "./FormSection.module.css";

const FormSection = () => {
  return (
    <div className={styles["form-section-container"]}>
      <div className={styles["contact-text-wrapper"]}>
        <h2>We are here for you</h2>
        <h3>Let us know how we can help and we'll get back to you ASAP</h3>
      </div>
      <div className={styles["lower-section-container"]}>
        <div className={styles["form-wrapper"]}>
          <form>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Subject</label>
            <select name="subject" required>
              <option value="Home Cleaning">Domestic Cleaning</option>
              <option value="Office Cleaning">Office Cleaning</option>
              <option value="End of Tenancy">End of Tenancy</option>
              <option value="Emergency Cleaning">Emergency Cleaning</option>
              <option value="One Off Cleaning">One Off Cleaning</option>
              <option value="Other">Other</option>
            </select>
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
            anything, don't be shy. Let It Shine!
          </p>
          <h3>Our Location</h3>
          <p>
            Based in Walton-on-Thames, we extend our cleaning services to nearby
            areas. Simply tell us your location, and we'll confirm if we serve
            your area.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.9779353073995!2d-0.4235475231727007!3d51.385083571785806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767500f0a36c31%3A0xb11428e73fb6c6a7!2sThe%20Heart%20Shopping%20Centre!5e0!3m2!1sen!2suk!4v1708015855399!5m2!1sen!2suk"
            width="600"
            height="500"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="office location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
