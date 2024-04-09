import styles from "./MobileMenu.module.css";
import Link from "next/link";
import exitIcon from "@/assets/exit-icon.png";
import Image from "next/image";

export default function MobileMenu({ pathname, onMenuCloseHandler }) {
  const onExit = () => {
    setTimeout(() => {
      onMenuCloseHandler();
    }, 100);
  };

  return (
    <>
      <div className={styles.exit}>
        <div className={styles[`exit-icon`]}>
          <Image src={exitIcon} alt="Exit." fill onClick={onExit} />
        </div>
      </div>
      <main className={styles.main}>
        <Link
          onClick={onExit}
          href="/"
          className={`${styles.home} ${styles[pathname === "/" && "active"]}`}
        >
          NASLOVNA
        </Link>

        <div className={styles.separator} />

        <div className={styles[`portfolio-list`]}>
          <Link
            onClick={onExit}
            href="/zavjese"
            className={`${styles.portfolio} ${
              styles[pathname === "/zavjese" && "active"]
            }`}
          >
            Zavjese
          </Link>
          <Link
            onClick={onExit}
            href="/rolice_paneli"
            className={`${styles.portfolio} ${
              styles[pathname === "/rolice_paneli" && "active"]
            }`}
          >
            Rolice i paneli
          </Link>
          <Link
            onClick={onExit}
            href="/dekoracija"
            className={`${styles.portfolio} ${
              styles[pathname === "/dekoracija" && "active"]
            }`}
          >
            Dekoracija
          </Link>
          <Link
            onClick={onExit}
            href="/prateca_dekoracija"
            className={`${styles.portfolio} ${
              styles[pathname === "/prateca_dekoracija" && "active"]
            }`}
          >
            Prateća dekoracija
          </Link>
        </div>

        <div className={styles.separator} />

        <div className={styles[`info-list`]}>
          <Link href="/#contact" className={styles.info} onClick={onExit}>
            Kontakt
          </Link>
          <Link href="/#location" className={styles.info} onClick={onExit}>
            Lokacija
          </Link>
        </div>
      </main>
    </>
  );
}
