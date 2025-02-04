import styles from "./Success.module.css";
import Modal from "./Modal";
import { useEffect, useRef } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Success({ onClose }) {
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, [5000]);
  }, []);

  return (
    <Modal
      onClose={() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
        onClose();
      }}
    >
      <div className={styles.container}>
        <FaRegCheckCircle className={styles.check} />
        <div className={styles.title}>
          Poruka je uspješno poslana, javiti ćemo vam se u najkraćem mogućem
          vremenu.
        </div>
      </div>
    </Modal>
  );
}
