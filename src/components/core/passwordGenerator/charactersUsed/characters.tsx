import styles from "./characters.module.scss";

const characters = () => {
  return (
    <>
      <p className={styles.password_characters_title}>Characters used:</p>
      <div className={styles.password_characters_full} role="group">
        <label className={styles.password_characters_text}>
          <input className={styles.password_characters_inputBox} type="checkbox" value="lowercase" name="characters" />
          <span className={styles.password_characters_charactersUsed}>abc</span>
        </label>
        <label className={styles.password_characters_text}>
          <input className={styles.password_characters_inputBox} type="checkbox" value="capital" name="characters" />
          <span className={styles.password_characters_charactersUsed}>ABC</span>
        </label>
        <label className={styles.password_characters_text}>
          <input className={styles.password_characters_inputBox} type="checkbox" value="numbers" name="characters" />
          <span className={styles.password_characters_charactersUsed}>123</span>
        </label>
        <label className={styles.password_characters_text}>
          <input className={styles.password_characters_inputBox} type="checkbox" value="test" name="characters" />
          <span className={styles.password_characters_charactersUsed}>@#$%</span>
        </label>
        <label className={styles.password_characters_text}>
          <input className={styles.password_characters_inputBox} type="checkbox" value="test" name="characters" />
          <span className={styles.password_characters_charactersUsed}>{`;.<>~`}</span>
        </label>
      </div>
    </>
  );
};

export default characters;
