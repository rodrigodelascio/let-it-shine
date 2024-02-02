import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo_Let_It_Shine_noText.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <ul className={styles["navbar-container"]}>
        <li>
          <NavLink to="/about" className={styles["nav-link"]}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={styles["nav-link"]}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={styles["nav-link"]}>
            <img src={logo} alt="logo" className={styles["nav-logo"]} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={styles["nav-link"]}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles["nav-link"]}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
