import React from "react";
import styles from "./passwordAndCopy.module.scss";

// images
import repeat from "../../../../globals/images/repeat.svg";

const PasswordAndCopy = () => {
  return (
    <div className={styles.password_input_full} role="group">
      <div className={styles.password_input_container} role="group">
        <input className={styles.password_input} type="text" name="fname" />
        <img className={styles.input_image} alt="repeat" src={repeat} />
      </div>
      <button className={styles.password_input_button}>Copy</button>
    </div>
  );
};

export default PasswordAndCopy;
