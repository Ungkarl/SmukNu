import styles from './becomeMember.module.css'


const BecomeMember = () => {

    return (
        <div className={styles.becomeMemberContainer}>
        <h1 className={styles.becomeMemberTitle}>MEDLEM?</h1>
        <p className={styles.becomeMemberDescription}>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
        <button className={styles.becomeMemberButton}>Bliv medlem af kundeklubben</button>
        </div>
    );



};

export default BecomeMember;