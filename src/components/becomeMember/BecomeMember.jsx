import styles from "./becomeMember.module.css";
import { Link } from "react-router-dom";

const BecomeMember = () => {
  return (
    <div className={styles.becomeMemberContainer}>
      <h1 className={styles.becomeMemberTitle}>MEDLEM?</h1>
      <p className={styles.becomeMemberDescription}>
        Vær med i kundeklubben for nye videoer, rabatkoder og mere!
      </p>
      <button className={styles.becomeMemberButton}>
        <Link to={"/bliv-medlem"}>Bliv Medlem</Link>
      </button>
    </div>
  );
};

export default BecomeMember;
