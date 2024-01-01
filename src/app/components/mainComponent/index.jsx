"use client";
import styles from "./main.module.scss";

import ListComponent from "../listComponent";

//context
//import { useDarkContext } from "@/app/context/darkContext";

function MainComponent() {
  //const { dark } = useDarkContext();
  //className={dark ? styles.lightMode : styles.darkMode}

  return (
    <main className={styles.lightMode}>
      
      <ListComponent />
    </main>
  );
}

export default MainComponent;
