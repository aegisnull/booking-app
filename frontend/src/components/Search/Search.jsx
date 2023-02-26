import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Search.module.scss";

function Search() {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.search__field}>
          <FontAwesomeIcon icon={faBed} />
          <input
            type="text"
            placeholder="Where are you going?"
            className={styles.search__input}
          />
        </div>
        <div className={styles.search__field}>
          <FontAwesomeIcon icon={faCalendarDays} />
          <input
            type="text"
            placeholder="Check in - Check out"
            className={styles.search__input}
          />
        </div>
        <div className={styles.search__field}>
          <FontAwesomeIcon icon={faPerson} />
          <input
            type="text"
            placeholder="2 adults - 0 children - 1 room"
            className={styles.search__input}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
