import styles from "./Services.module.css";
import Image from "next/image";
import img from "@/assets/email-icon.png";

export default function Services() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles["icon-wrapper"]}>
          <Image src={img} className={styles.icon} alt="icon" />
        </div>
        <div className={styles.description}>
          NUDIMO USLUGE ČIŠĆENAJA BRISANJA I PRANJA SVIH MOGUĆIH VRSTA ZAVJESA
        </div>

        <div className={styles["icon-wrapper"]}>
          <Image src={img} className={styles.icon} alt="icon" />
        </div>
        <div className={styles.description}>
          NUDIMO USLUGE ČIŠĆENAJA BRISANJA I PRANJA SVIH MOGUĆIH VRSTA ZAVJESA
        </div>

        <div className={styles["icon-wrapper"]}>
          <Image src={img} className={styles.icon} alt="icon" />
        </div>
        <div className={styles.description}>
          NUDIMO USLUGE ČIŠĆENAJA BRISANJA I PRANJA SVIH MOGUĆIH VRSTA ZAVJESA
        </div>
      </div>
    </div>
  );
}
