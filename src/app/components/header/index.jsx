"use client";

import styles from "./header.module.scss";

//context
import { useLoggedContext } from "@/app/context/loginContext";
import { useDarkContext } from "@/app/context/darkContext";

import Image from "next/image";

import profileImg from "../../assets/image.jpeg";

import { IoMdLogOut } from "react-icons/io";
import { MdNightsStay, MdWbSunny } from "react-icons/md";


function Header() {
  const { setLogged } = useLoggedContext();
  const {dark, setDark } = useDarkContext();

  const handleLogout = () => {
    setLogged(false);
  };
  const handleSwitchMode = () => {
    setDark(!dark);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerProfile}>
        <Image src={profileImg} width={50} height={50} alt="profile image" />
        <p>John Doe</p>
      </div>
      <div className={styles.headerBtn}>
        <div className={styles.nightMode}>
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
        </div>
        <button onClick={handleLogout}>
          <IoMdLogOut size={20} />
        </button>
      </div>
    </header>
  );
}
export default Header;
