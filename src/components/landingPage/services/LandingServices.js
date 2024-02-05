import styles from "./LandingServices.module.css";
import ServiceCard from "./ServiceCard";

const LandingServices = () => {
  return (
    <div className={styles["services-wrapper"]}>
      <section className={styles["services-container"]}>
        <h1>Services</h1>
        <h2>For your workplace or home</h2>
        <p>
          Elevate your environment with our expert touch, because your space
          deserves to shine as bright as you do. Discover a new standard of
          clean with us. Let It Shine!
        </p>
      </section>
      <section className={styles["services-cards-container"]}>
        <ServiceCard
          cardNumber={"1"}
          serviceTitle={"Office Cleaning"}
          serviceDescription={"Lorem ipsum"}
          className={styles["blue-number"]}
        />
        <ServiceCard
          cardNumber={"2"}
          serviceTitle={"Home Cleaning"}
          serviceDescription={"Lorem ipsum"}
        />
        <ServiceCard
          cardNumber={"3"}
          serviceTitle={"Deep Cleaning"}
          serviceDescription={"Lorem ipsum"}
        />
      </section>
    </div>
  );
};

export default LandingServices;
