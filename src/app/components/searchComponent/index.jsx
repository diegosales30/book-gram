"use client";
import styles from "./search.module.scss";
import { MdSearch } from "react-icons/md";
import AddBookComponent from "../addBookComponent";

function SearchComponent() {
  return (
    <div className={styles.container}>
      <AddBookComponent />
      <div className={styles.searchContainer}>
        <input type="text" maxLength={30} placeholder="encontrar livro..." />
        <MdSearch size={25} />
      </div>
    </div>
  );
}

export default SearchComponent;
