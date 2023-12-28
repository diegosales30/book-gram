"use client";
import styles from "./main.module.scss";

//context
import { useDarkContext } from "@/app/context/darkContext";

function MainComponent() {
  const { dark } = useDarkContext();

  return (
    <main className={dark ? styles.lightMode : styles.darkMode}>
      <h1>Hello World</h1>
    </main>
  );
}

export default MainComponent;
