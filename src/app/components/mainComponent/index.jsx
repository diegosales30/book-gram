"use client";
import styles from "./main.module.scss";

import ListComponent from "../listComponent";

function MainComponent() {

return (
    <main className={styles.lightMode}>
      <ListComponent />
    </main>
  );
}

export default MainComponent;
