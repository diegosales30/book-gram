"use client";
import styles from "./header.module.scss";
import { useLoggedContext } from "@/app/context/loginContext";
import Image from "next/image";
import profileImg from "../../assets/images.png";

import { IoMdLogOut } from "react-icons/io";
import { MdNightsStay, MdWbSunny } from "react-icons/md";

import { useState } from "react";

function Header() {
  const { setLogged } = useLoggedContext();
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    setLogged(false);
  };
  const handleSwitchMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerProfile}>
        <Image src={profileImg} width={50} height={50} alt="profile image" />
        <p>John Doe</p>
      </div>
      <div className={styles.headerBtn}>
        <div className={styles.nightMode}>
          {darkMode && (
            <>
              <MdWbSunny size={20} onClick={handleSwitchMode} />
              <p>Light Mode</p>
            </>
          )}
          {!darkMode && (
            <>
              <MdNightsStay size={20} onClick={handleSwitchMode} />
              <p>Dark Mode</p>
            </>
          )}
        </div>
        <button onClick={handleLogout}>
          <IoMdLogOut size={20} />
        </button>
      </div>
    </header>
  );
}
export default Header;
