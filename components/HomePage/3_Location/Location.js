import styles from "./Location.module.css";

export default function Location() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>PRONAĐITE NAS</div>
      <div className={styles.content}>
        <iframe
          src="https://maps.google.com/maps?q=salon%20zavjesa%20sonja%20prelo%C5%A1ka%2087&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className={styles.map}
        />
        <div className={styles.info}>
          <div className={styles[`info-title`]}>LOKACIJA</div>
          <div className={styles[`info-lines`]}>
            <div className={styles[`info-line`]}>Preloška ulica 87</div>
            <div className={styles[`info-line`]}>40000, Čakovec</div>
            <div className={styles[`info-line`]}>Međimurje</div>
            <div className={styles[`info-line`]}>Hrvatska</div>
          </div>
        </div>
      </div>
    </div>
  );
}
