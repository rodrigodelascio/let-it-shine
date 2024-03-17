import styles from "./Footer.module.css";
import logo from "../../assets/images/Logo_Let_It_Shine.png";
import { Link } from "react-router-dom";
import {
  BiLogoInstagramAlt,
  BiLogoFacebook,
  BiLogoYoutube,
} from "react-icons/bi";
import { SiNextdoor } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles["footer-container"]}>
      <section className={styles["footer-images-container"]}>
        <Link to="/" className={styles["footer-logo-container"]}>
          <img src={logo} alt="logo" className={styles["footer-logo"]} />
        </Link>
        <div className={styles["hero-socials"]}>
          <a
            href="https://www.instagram.com/letitshine_project"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoInstagramAlt className={styles["social-icon"]} />
          </a>
          <a
            href="https://nextdoor.co.uk/p/wbgR3fHJPgc_?utm_source=share&extras=MTc1OTIxOTYwODAyMDQ%3D&utm_campaign=1710696184808
https://nextdoor.co.uk/p/wbgR3fHJPgc_?utm_source=share&extras=MTc1OTIxOTYwODAyMDQ%3D&utm_campaign=1710696184808"
            target="_blank"
            rel="noreferrer"
          >
            <SiNextdoor className={styles["social-icon"]} />
          </a>
          <Link to="/contact">
            <MdEmail className={styles["social-icon"]} />
          </Link>
        </div>
        <p className={styles["footer-text"]}>
          © {currentYear} Let It Shine Services Ltd
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
