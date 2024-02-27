import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo_Let_It_Shine.png";
import { CgMenu, CgClose } from "react-icons/cg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const clickToHide = () => {
    if (isMobile) {
      setIsMobile(!isMobile);
    }
  };

  const navActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "var(--clr-green)" : "",
      pointerEvents: isActive ? "none" : "auto",
      textDecoration: isActive ? "underline" : "",
      textDecorationThickness: isActive ? "0.35rem" : "",
      textUnderlineOffset: isActive ? "0.75rem" : "",
      textDecorationColor: isActive ? "var(--clr-green)" : "",
    };
  };

  return (
    <div>
      <nav className={styles["navbar-wrapper"]}>
        <ul
          className={
            !isMobile
              ? styles["navbar-container"]
              : `${styles["navbar-container"]} ${styles["responsive-navbar"]}`
          }
        >
          <li>
            <NavLink
              to="/about"
              className={styles["nav-link"]}
              onClick={clickToHide}
              style={navActiveStyle}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={styles["nav-link"]}
              onClick={clickToHide}
              style={navActiveStyle}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={clickToHide} style={navActiveStyle}>
              <img src={logo} alt="logo" className={styles["nav-logo"]} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={styles["nav-link"]}
              onClick={clickToHide}
              style={navActiveStyle}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={styles["nav-link"]}
              onClick={clickToHide}
              style={navActiveStyle}
            >
              Contact
            </NavLink>
          </li>

          <CgClose
            size={30}
            className={styles["hamburger-close-icon"]}
            onClick={() => setIsMobile(!isMobile)}
          />
        </ul>
        <div className={styles["hamburger-menu-container"]}>
          <CgMenu
            size={30}
            className={styles["hamburger-menu-icon"]}
            onClick={() => setIsMobile(!isMobile)}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
