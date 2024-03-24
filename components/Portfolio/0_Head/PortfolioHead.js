import styles from "./PortfolioHead.module.css";

import headImg from "../../../assets/head-img.jpg";

export default function PortfolioHead() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>ZAVJESE</div>
      <div className={styles["image-wrapper"]}></div>
    </div>
  );
}
