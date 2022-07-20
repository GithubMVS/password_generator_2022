import styles from "./passwordTemplates.module.scss";

const passwordTemplates = () => {
  return (
    <>
      <p className={styles.password_templates_title}>Templates (optional):</p>
      <div className={styles.password_templates} role="group">
        <label className={styles.password_templates_name}>
          <input className={styles.password_templates_input} type="radio" value="none" name="template" />
          <span className={styles.password_templates_labelText}>none</span>
        </label>
        <label className={styles.password_templates_name}>
          <input className={styles.password_templates_input} type="radio" value="strong" name="template" />
          <span className={styles.password_templates_labelText}>strong</span>
        </label>
        <label className={styles.password_templates_name}>
          <input className={styles.password_templates_input} type="radio" value="easy to read" name="template" />
          <span className={styles.password_templates_labelText}>easy to read</span>
        </label>
        <label className={styles.password_templates_name}>
          <input className={styles.password_templates_input} type="radio" value="memorable" name="template" />
          <span className={styles.password_templates_labelText}>memorable</span>
        </label>
      </div>
    </>
  );
};

export default passwordTemplates;
