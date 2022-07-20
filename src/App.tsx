import styles from "./home.module.scss";

// components
import PasswordGenerator from "./components/core/passwordGenerator/PasswordGeneratorFull";

// functions

function App() {
  return (
    <>
      <main className={styles.passwordGenerator_container}>
        <h1 className={styles.title}>Password generator</h1>
        <PasswordGenerator />
      </main>
    </>
  );
}

export default App;
