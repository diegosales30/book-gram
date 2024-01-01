"use client";
import styles from "./footer.module.scss";

import { FcGoogle } from "react-icons/fc";
function FooterComponent() {
  return (
    <footer className={styles.rodape}>
      <p>&copy; 2024 Bookgram from<FcGoogle size={20} />google </p>
    </footer>
  );
}

export default FooterComponent;