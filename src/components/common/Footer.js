import styles from "./Footer.module.css";
import logo from "../../assets/images/Logo_Let_It_Shine.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles["footer-container"]}>
      <section className={styles["footer-images-container"]}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles["footer-logo"]} />
        </Link>
        <p className={styles["footer-text"]}>
          © {currentYear} Let It Shine Services
        </p>
      </section>
      <section className={styles["footer-links-container"]}>
        <Link to="/about" className={styles["footer-link"]}>
          About
        </Link>
        <Link to="/services" className={styles["footer-link"]}>
          Services
        </Link>
        <Link to="/projects" className={styles["footer-link"]}>
          Projects
        </Link>
        <Link to="/contact" className={styles["footer-link"]}>
          Contact
        </Link>
      </section>
    </div>
  );
};

export default Footer;
