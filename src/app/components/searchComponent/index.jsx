"use client";
import styles from "./search.module.scss";
import { MdSearch } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import AddBookComponent from "../addBookComponent";

function SearchComponent() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.plusContainer}>
        <FaPlusCircle size={25} />
        <p>Adicionar livro</p>
      </div> */}
      <AddBookComponent />
      <div className={styles.searchContainer}>
        <input type="text" maxLength={30} placeholder="encontrar livro..." />
        
        <MdSearch size={25}  />
      </div>
    </div>
  );
};

export default SearchComponent;