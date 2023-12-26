"use client";
import styles from "./loginPage.module.scss";

import { FaBook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { PiFilePdfBold } from "react-icons/pi";

function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <FaBook className={styles.svgLogo} />
          <PiFilePdfBold className={styles.svgLogo2} />
        </div>
        <h1>BookGram</h1>
      </div>
      <div className={styles.btnContainer}>
        <button>
          Entrar com o Google
          <FcGoogle size={25} />
        </button>
      </div>
      <div className={styles.textContainer}>
        <p>
          Armazene seus livros em formato PDF e desfrute da leitura em qualquer
          lugar!
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
