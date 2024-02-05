import styles from "./ServiceCard.module.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const ServiceCard = ({
  cardNumber,
  serviceTitle,
  serviceDescription,
  className,
}) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-number-container"] + " " + className}>
        <div className={styles["card-number"]}>{cardNumber}</div>
      </div>
      <div>
        <h3>{serviceTitle}</h3>
        <p>{serviceDescription}</p>
        <Link to="/services">
          <p>
            Find out more
            <span>
              <GoArrowUpRight />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
