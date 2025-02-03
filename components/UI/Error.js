import Button from "./Button";
import styles from "./Error.module.css";
import Modal from "./Modal";

export default function Error({ onClose }) {
  <Modal onClose={onClose}>
    <div className={styles.container}>
      <div className={styles.title}>
        Došlo je do pogreške kod slanja maila, pokušajte ponovo kasnije.
      </div>
      <Button onClick={onClose}>Zatvori</Button>
    </div>
  </Modal>;
}
