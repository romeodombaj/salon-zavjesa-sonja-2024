import ContactForm from "./ContactForm";
import styles from "./ContactUs.module.css";
import Image from "next/image";

import emailIcon from "@/assets/email-icon.png";
import phoneIcon from "@/assets/phone-icon.png";
import ContactLine from "./ContactLine";

export default function ContactUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>KONTAKTIRAJTE NAS</div>
      <div className={styles.content}>
        <ContactForm />
        <div className={styles.info}>
          <div className={styles["info-title"]}>KONTAKT</div>
          <ContactLine image={phoneIcon} alt="Phone icon." text="0995951938" />

          <ContactLine
            image={emailIcon}
            alt="Email icon."
            text="sonjad13@net.hr"
          />
        </div>
      </div>
    </div>
  );
}
