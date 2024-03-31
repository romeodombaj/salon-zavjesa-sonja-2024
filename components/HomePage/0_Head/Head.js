import styles from "./Head.module.css";
import Image from "next/image";
import headImg from "@/assets/head-img.jpg";

export default function Head() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles[`image-wrapper`]}>
          <Image src={headImg} className={styles.image} alt="Head image." />
        </div>
        <div className={styles.title}>SALON ZAVJESA SONJA</div>
      </main>
    </div>
  );
}
