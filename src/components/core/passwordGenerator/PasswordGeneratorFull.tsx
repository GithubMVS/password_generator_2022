import React from "react";
import styles from "./passwordGeneratorFull.module.scss";

// components
import PasswordAndCopy from "./passwordAndCopy/PasswordAndCopy";
import Templates from "./templates/passwordTemplates";
import PasswordLength from "./passwordLength/passwordLength";
import CharactersUsed from "./charactersUsed/characters";

// functions

const PasswordGeneratorFull = () => {
  return (
    <section className={styles.passwordGenerator_full}>
      <p className={styles.rate_password}>Really Bad</p>
      <PasswordAndCopy />
      <Templates />
      <PasswordLength />
      <CharactersUsed />
    </section>
  );
};

export default PasswordGeneratorFull;
