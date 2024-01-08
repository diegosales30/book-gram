"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";

//componentes
import SearchComponent from "../searchComponent";
import AddBookComponent from "../addBookComponent";
//icons
import { IoMdCloseCircle } from "react-icons/io";
import { LuFileSearch } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineLogout, MdOutlineManageSearch } from "react-icons/md";
//router
import { useRouter } from "next/navigation";
//firebase
import { signOut } from "firebase/auth";
import { auth } from "@/app/services/firebase";


function Header() {
  //user localStorage
  const [user, setUser] = useState(null);
  const [searchMobile, setSearchMobile] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const searchMobileRef = useRef(null);
  const route = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage?.getItem("user"));
    setUser(user);
  }, []);

  const handleSearchMobile = () => {
    setSearchMobile(true);
  };

  const handleClickOutside = (event) => {
    if (
      searchMobileRef.current &&
      !searchMobileRef.current.contains(event.target)
    ) {
      // Clicou fora do modal, fecha o modal
      setSearchMobile(false);
    }
  };
  useEffect(() => {
    // Adiciona o event listener quando o componente monta
    document.addEventListener("click", handleClickOutside);
    // Remove o event listener quando o componente desmonta
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchMobile]);

  const handleLogoutModal = () => {
    setLogoutModal(!logoutModal);
  };

  /* const handleLogout = () => {
      localStorage.clear();
      route.push("/");
   }; 
  */
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  
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
      {searchMobile && (
        <div className={styles.searchMobileContainer} ref={searchMobileRef}>
          <SearchComponent />
        </div>
      )}
      <div className={styles.headerContent}>
        <div className={styles.headerProfile}>
          <button onClick={handleLogoutModal}>
            <img src={user?.photoURL} alt="profile image" />
          </button>
        </div>
        {logoutModal && (
          <div className={styles.logoutContainer}>
            <div className={styles.logoutModal}>
              <IoMdCloseCircle
                size={25}
                onClick={handleLogoutModal}
                color="#CD5C5C"
                className={styles.closeIcon}
              />
              <header className={styles.logoutHeader}>
                <img src={user?.photoURL} alt="profile image" />
                <p>Olá, {user?.displayName.split(" ")[0]}!</p>
              </header>
              <div className={styles.logoutBtns}>
                <button>
                  <LuFileSearch size={20} />
                  <p>Livros públicos</p>
                </button>
                <button>
                  <FaRegQuestionCircle size={20} />
                  <p>Sobre o Projeto</p>
                </button>
                <button onClick={handleLogout}>
                  <MdOutlineLogout size={23} />
                  <p>Sair do bookgram</p>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className={styles.headerBtn}></div>
      </div>
    </header>
  );
}
export default Header;
