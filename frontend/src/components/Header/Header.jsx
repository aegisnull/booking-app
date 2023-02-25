import styles from "../../styles/Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPersonSkiing,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.topbar__container}>
          <div className={styles.topbar__logo}>LuisBooking.com</div>
          <nav className={styles.topbar__nav}>
            <button className={styles.topbar__nav_button}>Register</button>
            <button className={styles.topbar__nav_button}>Login</button>
          </nav>
        </div>
      </div>
      <div className={styles.bottombar}>
        <div className={styles.bottombar__container}>
          <div className={styles.bottombar__list}>
            <div className={styles.bottombar__icon}>
              <FontAwesomeIcon icon={faBed} />
              Stays
            </div>
            <div className={styles.bottombar__icon}>
              <FontAwesomeIcon icon={faPlane} />
              Flights
            </div>
            <div className={styles.bottombar__icon}>
              <FontAwesomeIcon icon={faCar} />
              Car rentals
            </div>
            <div className={styles.bottombar__icon}>
              <FontAwesomeIcon icon={faPersonSkiing} />
              Attractions
            </div>
            <div className={styles.bottombar__icon}>
              <FontAwesomeIcon icon={faTaxi} />
              Airpot taxis
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
