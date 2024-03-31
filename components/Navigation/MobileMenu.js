import styles from "./MobileMenu.module.css";
import Link from "next/link";

export default function MobileMenu({ pathname }) {
  return (
    <main className={styles.main}>
      <Link
        href="/"
        className={`${styles.home} ${styles[pathname === "/" && "active"]}`}
      >
        NASLOVNA
      </Link>
      <div className={styles[`portfolio-list`]}>
        <Link
          href="/zavjese"
          className={`${styles.portfolio} ${
            styles[pathname === "/zavjese" && "active"]
          }`}
        >
          Zavjese
        </Link>
        <Link
          href="/rolice_paneli"
          className={`${styles.portfolio} ${
            styles[pathname === "/rolice_paneli" && "active"]
          }`}
        >
          Rolice i paneli
        </Link>
        <Link
          href="/dekoracija"
          className={`${styles.portfolio} ${
            styles[pathname === "/dekoracija" && "active"]
          }`}
        >
          Dekoracija
        </Link>
        <Link
          href="/prateca_dekoracija"
          className={`${styles.portfolio} ${
            styles[pathname === "/prateca_dekoracija" && "active"]
          }`}
        >
          Prateća dekoracija
        </Link>
      </div>

      <div className={styles[`info-list`]}>
        <Link href="/#contact" className={styles.info}>
          Kontakt
        </Link>
        <Link href="/#location" className={styles.info}>
          Lokacija
        </Link>
      </div>
    </main>
  );
}
