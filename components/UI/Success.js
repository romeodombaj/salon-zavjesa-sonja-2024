import styles from "./Success.module.css";
import Modal from "./Modal";
import { useEffect } from "react";

export default function Success({ onClose }) {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, [5000]);
  }, []);

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.title}>
          Poruka je uspješno poslana,
          <br />
          javiti ćemo vam se u najkraćem mogućem vremenu.
        </div>
      </div>
    </Modal>
  );
}
