"use client";
import styles from "./add.module.scss";
import { FaPlusCircle } from "react-icons/fa";

function AddBookComponent() {
  return (
    <div className={styles.plusContainer}>
      <FaPlusCircle size={25} />
      <p>Adicionar livro</p>
    </div>
  );
}

export default AddBookComponent;
