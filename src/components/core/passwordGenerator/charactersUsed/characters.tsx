import styles from "./characters.module.scss";

const characters = () => {
  return (
    <div className={styles.password_characters_full} role="group">
      <label className={styles.password_characters_text}>
        <input className={styles.password_characters_inputBox} type="checkbox" value="lowercase" name="characters" /> abc
      </label>
      <label className={styles.password_characters_text}>
        <input className={styles.password_characters_inputBox} type="checkbox" value="capital" name="characters" /> ABC
      </label>
      <label className={styles.password_characters_text}>
        <input className={styles.password_characters_inputBox} type="checkbox" value="numbers" name="characters" /> 123
      </label>
      <label className={styles.password_characters_text}>
        <input className={styles.password_characters_inputBox} type="checkbox" value="test" name="characters" /> @#$%
      </label>
      <label className={styles.password_characters_text}>
        <input className={styles.password_characters_inputBox} type="checkbox" value="test" name="characters" /> {`;.<>~`}
      </label>
    </div>
  );
};

export default characters;
