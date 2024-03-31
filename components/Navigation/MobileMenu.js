import styles from "./MobileMenu.module.css";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <main className={styles.main}>
      <Link href="/" className={styles.home}>
        NASLOVNA
      </Link>
      <div className={styles[`portfolio-list`]}>
        <Link href="/zavjese" className={styles.portfolio}>
          Zavjese
        </Link>
        <Link href="/rolice_paneli" className={styles.portfolio}>
          Rolice i paneli
        </Link>
        <Link href="/dekoracija" className={styles.portfolio}>
          Dekoracija
        </Link>
        <Link href="/prateca_dekoracija" className={styles.portfolio}>
          Prateća dekoracija
        </Link>
      </div>

      <div className={styles[`info-list`]}>

      </div>
    </main>
  );
}
