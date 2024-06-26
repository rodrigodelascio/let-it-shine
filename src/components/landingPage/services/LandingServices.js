import styles from "./LandingServices.module.css";
import ServiceCard from "./ServiceCard";
import { BsDashLg } from "react-icons/bs";
import cleaningProducts from "../../../assets/images/products.png";

const LandingServices = () => {
  return (
    <div className={styles["section-background-container"]}>
      <div className={styles["services-wrapper"]}>
        <section className={styles["services-container"]}>
          <div className={styles["services-header-container"]}>
            <BsDashLg className={styles["dash-icon"]} />
            <h1>Services</h1>
          </div>
          <h2>
            What we do for <span>our clients</span>
          </h2>
          <p>
            We're experts in delivering meticulous cleaning solutions tailored
            to your needs. Our dedicated team ensures every corner of your home
            or office dazzles with cleanliness.
          </p>
          <div className={styles["cleaning-products-container"]}>
            <img
              src={cleaningProducts}
              alt="cleaning products"
              className={styles["cleaning-products"]}
            />
          </div>
        </section>
        <section className={styles["services-cards-container"]}>
          <ServiceCard
            cardNumber={"1"}
            serviceTitle={"Domestic Cleaning"}
            className={styles["green-number"]}
          />
          <ServiceCard
            cardNumber={"2"}
            serviceTitle={"Office Cleaning"}
            className={styles["blue-number"]}
          />
          <ServiceCard
            cardNumber={"3"}
            serviceTitle={"End of Tenancy"}
            className={styles["orange-number"]}
          />
        </section>
      </div>
    </div>
  );
};

export default LandingServices;
