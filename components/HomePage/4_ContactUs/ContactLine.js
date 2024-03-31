"use client";

import styles from "./ContactLine.module.css";
import Image from "next/image";

export default function ContactLine({ image, alt, text }) {
  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className={styles["contact-section"]}>
      <Image className={styles["contact-icon"]} src={image} alt={alt} />
      <div className={styles["contact-text"]} onClick={copyTextToClipboard}>
        {text}
      </div>
    </main>
  );
}
