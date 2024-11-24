import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.items}>
          <div className={styles[`title`]}>Proizvodi</div>
          <div className={styles[`item`]}>Zavjese</div>
          <div className={styles[`item`]}>Rolice i paneli</div>
          <div className={styles[`item`]}>Dekoracija</div>
          <div className={styles[`item`]}>Prateća dekoracija</div>
        </div>
        <div className={styles.items}>
          <div className={styles.title}>Kontakt</div>
          <div className={styles[`item`]}>0958000757</div>
          <div className={styles[`item`]}>salonsonja@net.hr</div>
        </div>
      </div>
      <div className={styles.copyright}>© Salon zavjesa Sonja</div>
    </div>
  );
}
