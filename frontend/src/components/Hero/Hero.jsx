import styles from "../../styles/Hero.module.scss";

function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__container}>
          <h1 className={styles.hero__title}>Find your next stay</h1>
          <p className={styles.hero__subtitle}>
            Search deals on hotels, homes, and much more...
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
