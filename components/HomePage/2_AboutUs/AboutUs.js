import styles from "./AboutUs.module.css";
import Image from "next/image";
import image from "@/assets/head-img.jpg";

export default function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.title}>O nama</div>
        <div className={styles.description}>
          Salon zavjesa Sonja započela je s radom 2009. godine. Nudimo Vam
          široki asortiman zavjesa, dekora, ukrasnih jastuka, prekrivača,
          odnosno sve vezano uz dekoraciju prostora sa tkaninom. Nudimo Vam
          idejna rješenja, izmjeru, izradu i montažu u skladu sa zahtjevima
          kupaca i trendovima
        </div>
      </div>
      <Image className={styles.image} src={image} alt="About us image." />
    </div>
  );
}
