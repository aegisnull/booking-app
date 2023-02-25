import styles from "../../styles/Header.module.scss";

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
            
    </>
  );
}

export default Header;
