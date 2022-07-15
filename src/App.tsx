import styles from "./home.module.scss";

// components
import PasswordGenerator from "./components/core/passwordGenerator/PasswordGeneratorFull";

// functions

function App() {
  return (
    <>
      <h1 className={styles.title}>Password generator</h1>
      <PasswordGenerator />
    </>
  );
}

export default App;
