import styles from "./passwordTemplates.module.scss";

const passwordTemplates = () => {
  return (
    <div className={styles.password_templates} role="group">
      <label className={styles.password_templates_name}>
        <input className={styles.password_templates_input} type="radio" value="none" name="template" /> none
      </label>
      <label className={styles.password_templates_name}>
        <input className={styles.password_templates_input} type="radio" value="strong" name="template" /> strong
      </label>
      <label className={styles.password_templates_name}>
        <input className={styles.password_templates_input} type="radio" value="easy to read" name="template" /> easy to read
      </label>
      <label className={styles.password_templates_name}>
        <input className={styles.password_templates_input} type="radio" value="memorable" name="template" /> memorable
      </label>
    </div>
  );
};

export default passwordTemplates;
