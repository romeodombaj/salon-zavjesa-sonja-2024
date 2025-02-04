import styles from "./Input.module.css";

export default function Input({
  isTextArea = false,
  label,
  value,
  onChange,
  ...props
}) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      {isTextArea ? (
        <textarea
          className={styles.textarea}
          value={value}
          onChange={onChange}
          {...props}
        ></textarea>
      ) : (
        <input
          className={styles.input}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    </div>
  );
}
