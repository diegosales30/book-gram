'use client';

import styles from './loginPage.module.scss';
import { FaBook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <FaBook size={150} color='#ff5454'/>
        <h1>BookGram</h1>
      </div>
      <div className={styles.btnContainer}>
        <button>
          Entrar com o Google
          <FcGoogle size={20} />
        </button>
      </div>
      <div className={styles.textContainer}>
        <p>Armazene seus livros em formato PDF e desfrute da leitura em qualquer lugar!</p>
      </div>
    </div>
  );
}
export default LoginPage;