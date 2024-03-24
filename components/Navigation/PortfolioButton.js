import Link from "next/link";
import styles from "./PortfolioButton.module.css";

export default function PortfolioButton(props) {
  return (
    <Link
      href={`/${props.value}`}
      className={`${styles.wrapper} ${styles[props.navShrink && "shrink"]}`}
      {...props}
    >
      {props.children}
    </Link>
  );
}
