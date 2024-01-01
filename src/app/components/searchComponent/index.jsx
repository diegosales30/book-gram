"use client";
import styles from "./search.module.scss";
import { MdSearch } from "react-icons/md";

function SearchComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input type="text" maxLength={30} placeholder="Pesquisar" />
        <MdSearch size={25} color={"#5f6368"} />
      </div>
    </div>
  );
}

export default SearchComponent;
