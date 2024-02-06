import styles from "./ServiceCard.module.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const ServiceCard = ({ cardNumber, serviceTitle, className }) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-number-container"] + " " + className}>
        <div className={styles["card-number"]}>{cardNumber}</div>
      </div>
      <div className={styles["card-text-container"]}>
        <h3>{serviceTitle}</h3>
        <Link to="/services">
          <div className={styles["card-link"]}>
            <p className={styles["card-link-text"]}>Find out more</p>
            <GoArrowUpRight className={styles["arrow-up-icon"]} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
