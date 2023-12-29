"use client";
import styles from "./main.module.scss";
import SearchComponent from "../searchComponent";

//context
import { useDarkContext } from "@/app/context/darkContext";
import ListComponent from "../listComponent";

function MainComponent() {
  const { dark } = useDarkContext();

  return (
    <main className={dark ? styles.lightMode : styles.darkMode}>
      <SearchComponent />
      <ListComponent />
    </main>
  );
}

export default MainComponent;
