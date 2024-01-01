"use client";

import styles from "./header.module.scss";

//context
import { useLoggedContext } from "@/app/context/loginContext";
//import { useDarkContext } from "@/app/context/darkContext";

import Image from "next/image";

import profileImg from "../../assets/image.jpeg";

import { MdOutlineLogout, MdOutlineManageSearch } from "react-icons/md";
import SearchComponent from "../searchComponent";
import AddBookComponent from "../addBookComponent";
//import { MdNightsStay, MdWbSunny } from "react-icons/md";


function Header() {
  const { setLogged } = useLoggedContext();
  //const {dark, setDark } = useDarkContext();

  const handleLogout = () => {
    setLogged(false);
  };
  //modo noturno desativado

  // const handleSwitchMode = () => {
  //   setDark(!dark);
  // };

  return (
    <header className={styles.headerContainer}>
      <AddBookComponent />
      <div className={styles.teste1}>
        <SearchComponent />
      </div>
      <button className={styles.teste2}>
        <MdOutlineManageSearch size={30} color="#5f6368" />
        <p>Pesquisar</p>
      </button>
      <div className={styles.headerContent}>
        <div className={styles.headerProfile}>
        <Image src={profileImg} width={35} height={35} alt="profile image" />
        {/* <p>John Doe</p> */}
        </div>
        <div className={styles.headerBtn}>
        {/* <div className={styles.nightMode}>
          {dark && (
            <>
              <MdWbSunny size={20} onClick={handleSwitchMode} />
              <p>Light Mode</p>
            </>
          )}
          {!dark && (
            <>
              <MdNightsStay size={20} onClick={handleSwitchMode} />
              <p>Dark Mode</p>
            </>
          )}
        </div> */}
          <button onClick={handleLogout}>
            <MdOutlineLogout size={30} color="#5f6368" />
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
