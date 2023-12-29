"use client";
import styles from "./main.module.scss";
import SearchComponent from "../searchComponent";

//context
import { useDarkContext } from "@/app/context/darkContext";

function MainComponent() {
  const { dark } = useDarkContext();

  return (
    <main className={dark ? styles.lightMode : styles.darkMode}>
      <SearchComponent />
    </main>
  );
}

export default MainComponent;
