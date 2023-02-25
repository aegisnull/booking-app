import styles from "../../styles/Navbar.module.scss";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__container}>
          <div className={styles.navbar__logo}>LuisBooking.com</div>
          <nav className={styles.navbar__nav}>
            <button className={styles.navbar__nav_button}>Register</button>
            <button className={styles.navbar__nav_button}>Login</button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
