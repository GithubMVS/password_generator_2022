import React, { useState } from "react";

import styles from "./passwordLength.module.scss";

// images
import plus from "../../../../globals/images/plus.svg";
import minus from "../../../../globals/images/minus.svg";

const PasswordLength = () => {
  const [progresSlider, setProgresSlider] = useState(13);
  return (
    <>
      <p className={styles.password_length_title}>Password length:</p>
      <div className={styles.password_length_full} role="group">
        <input className={styles.password_length_input} value={progresSlider} type="text" name="fname" />
        <div className={styles.password_length_buttonsAndSlider} role="group">
          <button className={styles.password_length_button}>
            <img className={styles.password_length_image} alt="button-minus" src={minus} />
          </button>
          <div className={styles.password_length_slider_group}>
            <input
              className={styles.password_length_slider}
              onChange={(e) => setProgresSlider(e.target.valueAsNumber)}
              type="range"
              min="1"
              max="50"
              value={progresSlider}
            />
            <div style={{ width: `${progresSlider * 2}%` }} className={styles.progressSlider}></div>
          </div>
          <button className={styles.password_length_button}>
            <img className={styles.password_length_image} alt="button-plus" src={plus} />
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordLength;
