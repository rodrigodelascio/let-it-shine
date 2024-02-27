import styles from "./ServicesSection.module.css";
import { Link } from "react-router-dom";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import {
  GiOfficeChair,
  GiHouseKeys,
  GiFlowers,
  GiWateringCan,
  GiPartyPopper,
  GiWindow,
  GiWashingMachine,
} from "react-icons/gi";
import { IoIosConstruct } from "react-icons/io";
import { MdPets } from "react-icons/md";
import { PiSirenFill } from "react-icons/pi";

const ServicesSection = () => {
  return (
    <div>
      <div className={styles["section-background-container"]}>
        <div className={styles["services-section-container"]}>
          <div className={styles["services-text-container"]}>
            <div className={styles["services-header-container"]}>
              <h2 className={styles["header-title"]}>A range of services</h2>
            </div>
            <h3 className={styles["header-subtitle"]}>
              To boost your productivity and elevate your space
            </h3>
          </div>
          <div className={styles["services-cards-container"]}>
            <div className={styles["card"]}>
              <FaHome className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>Domestic Cleaning</h3>
              <p className={styles["card-text"]}>
                Tailored professional cleaning, with eco-friendly products, and
                spotless results
              </p>
            </div>
            <div className={styles["card"]}>
              <GiOfficeChair className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>Office Cleaning</h3>
              <p className={styles["card-text"]}>
                Professional office cleaning to enhance productivity and impress
                clients
              </p>
            </div>
            <div className={styles["card"]}>
              <GiHouseKeys className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>End of Tenancy</h3>
              <p className={styles["card-text"]}>
                Stress-free move-out cleaning for a smooth handover at the end
                of your tenancy
              </p>
            </div>
            <div className={styles["card"]}>
              <GiFlowers className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>Spring Cleaning</h3>
              <p className={styles["card-text"]}>
                Refresh your space and embrace the season with our expert spring
                cleaning
              </p>
            </div>
            <div className={styles["card"]}>
              <FaSprayCanSparkles className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>One Off Cleaning</h3>
              <p className={styles["card-text"]}>
                One off cleaning for for any occasion, immaculate results, we
                take care of it
              </p>
            </div>
            <div className={styles["card"]}>
              <GiWindow className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>Indoor Window</h3>
              <p className={styles["card-text"]}>
                Let the light shine in with flawless, expert window cleaning,
                enjoy the view
              </p>
            </div>
            <div className={styles["card"]}>
              <GiWashingMachine className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>Appliance Cleaning</h3>
              <p className={styles["card-text"]}>
                Say goodbye to grime, hello to shine, Let It Shine cleans most
                of your appliances
              </p>
            </div>
            <div className={styles["card"]}>
              <IoIosConstruct className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>After Builders</h3>
              <p className={styles["card-text"]}>
                Post-renovation sparkle, expert flawless dust-free cleaning
                after the builders leave
              </p>
            </div>
            <div className={styles["card"]}>
              <GiPartyPopper className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>After Party</h3>
              <p className={styles["card-text"]}>
                Recover and relax, we'll handle the post party mess, let the
                good times roll
              </p>
            </div>
            <div className={styles["card"]}>
              <PiSirenFill className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>Emergency Cleaning</h3>
              <p className={styles["card-text"]}>
                Unexpected mess? Get back to normal with Let It Shine's
                emergency cleaning
              </p>
            </div>
            <div className={styles["card"]}>
              <MdPets className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>Pet Sitting</h3>
              <p className={styles["card-text"]}>
                Peaceful travel knowing your pets are happy and safe with
                reliable pet sitting
              </p>
            </div>
            <div className={styles["card"]}>
              <GiWateringCan className={styles["card-icon"]} />
              <h3 className={styles["card-title"]}>Plants Watering</h3>
              <p className={styles["card-text"]}>
                Let your plants bloom with our personalized stress-free watering
                while you travel
              </p>
            </div>
          </div>
          <Link to="/contact" className={styles["button-wrapper"]}>
            <button className={styles["services-card-button"]}>
              Get your quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
