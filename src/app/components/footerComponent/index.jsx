"use client";
import styles from "./footer.module.scss";
import { FaMeta } from "react-icons/fa6";
function FooterComponent() {
  return (
    <footer className={styles.rodape}>
      <p>&copy; 2024 BookGram from <FaMeta size={25} /> meta </p>
    </footer>
  );
}

export default FooterComponent;