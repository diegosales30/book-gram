"use client";

import { useEffect, useRef, useState } from "react";
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
  const [searchMobile, setSearchMobile] = useState(false);
  const searchMobileRef = useRef(null);
  //const {dark, setDark } = useDarkContext();
  
  const handleSearchMobile = () => {
    setSearchMobile(true);
    
  };

  const handleClickOutside = (event) => {
    if (searchMobileRef.current && !searchMobileRef.current.contains(event.target)) {
      // Clicou fora do modal, fecha o modal
      setSearchMobile(false);
      
    }
  };

  useEffect(() => {
    // Adiciona o event listener quando o componente monta
    document.addEventListener('click', handleClickOutside);
    // Remove o event listener quando o componente desmonta
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [searchMobile]);

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
      <div className={styles.searchPc}>
        <SearchComponent />
      </div>
      <button className={styles.searchMobile} onClick={handleSearchMobile}>
        <MdOutlineManageSearch size={30} color="#5f6368" />
        <p>Pesquisar</p>
      </button>
      {
        searchMobile && (
          <div className={styles.searchMobileContainer} ref={searchMobileRef}>
            <SearchComponent />
          </div>
        )
      }
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
