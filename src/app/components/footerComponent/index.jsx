"use client";
import styles from "./footer.module.scss";

import {
  TbSquareRoundedLetterF,
  TbSquareRoundedLetterE,
  TbSquareRoundedLetterL,
  TbSquareRoundedLetterI,
  TbSquareRoundedLetterP,
} from "react-icons/tb";
import { GiBrazil} from "react-icons/gi";
function FooterComponent() {
  return (
    <footer className={styles.rodape}>
      <p>
        &copy; 2024 developed by
        <TbSquareRoundedLetterF size={15} />{" "}
        <TbSquareRoundedLetterE size={15} />
        <TbSquareRoundedLetterL size={15} />
        <TbSquareRoundedLetterI size={15} />
        <TbSquareRoundedLetterP size={15} />{" "}
        <GiBrazil size={20}/>
      </p>
    </footer>
  );
}

export default FooterComponent;
