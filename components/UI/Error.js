import Button from "./Button";
import styles from "./Error.module.css";
import Modal from "./Modal";
import { BiSolidErrorCircle } from "react-icons/bi";

export default function Error({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className={styles.container}>
        <BiSolidErrorCircle className={styles.circle} />

        <div className={styles.actions}>
          <div className={styles.title}>
            Došlo je do pogreške kod slanja kontakt poruke, pokušajte ponovo
            kasnije.
          </div>
          <Button onClick={onClose}>Zatvori</Button>
        </div>
      </div>
    </Modal>
  );
}
