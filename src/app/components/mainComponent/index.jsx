"use client";
import styles from "./main.module.scss";
import SearchComponent from "../searchComponent";

//context
import { useDarkContext } from "@/app/context/darkContext";
import ListComponent from "../listComponent";
import FooterComponent from "../footerComponent";

function MainComponent() {
  const { dark } = useDarkContext();

  return (
    <main className={dark ? styles.lightMode : styles.darkMode}>
      <SearchComponent />
      <ListComponent />
      <FooterComponent />
    </main>
  );
}

export default MainComponent;
