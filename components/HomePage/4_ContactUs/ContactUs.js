import ContactForm from "./ContactForm";
import styles from "./ContactUs.module.css";
import Image from "next/image";

import emailIcon from "@/assets/email-icon.png";
import phoneIcon from "@/assets/phone-icon.png";

export default function ContactUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>KONTAKTIRAJTE NAS</div>
      <div className={styles.content}>
        <ContactForm />
        <div className={styles.info}>
          <div className={styles["info-title"]}>KONTAKT</div>
          <div className={styles["contact-section"]}>
            <Image
              className={styles["contact-icon"]}
              src={phoneIcon}
              alt="Phone icon."
            />
            <div className={styles["contact-text"]}>0995951938</div>
          </div>

          <div className={styles["contact-section"]}>
            <Image
              className={styles["contact-icon"]}
              src={emailIcon}
              alt="E-mail icon."
            />
            <div className={styles["contact-text"]}>sonjad13@net.hr</div>
          </div>
        </div>
      </div>
    </div>
  );
}
