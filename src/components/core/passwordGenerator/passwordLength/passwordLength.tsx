import styles from "./passwordLength.module.scss";

// images
import plus from "../../../../globals/images/plus.svg";
import minus from "../../../../globals/images/minus.svg";

const passwordLength = () => {
  return (
    <div className={styles.password_length_full} role="group">
      <input className={styles.password_length_input} type="text" name="fname" />
      <div className={styles.password_length_buttonsAndSlider} role="group">
        <button className={styles.password_length_button}>
          <img className={styles.password_length_image} alt="button-minus" src={minus} />
        </button>
        <input className={styles.password_length_slider} type="range" min="1" max="50" value="13" />
        <button className={styles.password_length_button}>
          <img className={styles.password_length_image} alt="button-plus" src={plus} />
        </button>
      </div>
    </div>
  );
};

export default passwordLength;
