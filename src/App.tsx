import styles from "./home.module.scss";

// components

// functions

// images
import repeat from "./globals/images/repeat.svg";
import plus from "./globals/images/plus.svg";
import minus from "./globals/images/minus.svg";

function App() {
  return (
    <>
      <h1 className={styles.title}>Password generator</h1>
      <section className={styles.passwordGenerator_full}>
        <p className={styles.rate_password}>describe</p>
        <div className={styles.password_input_full} role="group">
          <div className={styles.password_input_container} role="group">
            <input className={styles.password_input} type="text" name="fname" />
            <img className={styles.input_image} alt="repeat" src={repeat} />
          </div>
          <button className={styles.password_input_button}>Copy</button>
        </div>
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
      </section>
    </>
  );
}

export default App;
