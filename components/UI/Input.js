import styles from "./Input.module.css";

export default function Input({ isTextArea = false, label, props }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      {isTextArea ? (
        <textarea className={styles.textarea} {...props}></textarea>
      ) : (
        <input className={styles.input} {...props} />
      )}
    </div>
  );
}
