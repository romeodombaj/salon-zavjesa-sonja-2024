import styles from "./Loader.module.css";
import { ColorRing } from "react-loader-spinner";
import Modal from "./Modal";

export default function Loader() {
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles[`ring-container`]}>
          <ColorRing
            visible={true}
            height="150px"
            width="150px"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#d2a278", "#d2a278", "#d2a278", "#d2a278", "#d2a278"]}
          />
        </div>

        <div className={styles.title}>Slanje e-maila</div>
      </div>
    </Modal>
  );
}
