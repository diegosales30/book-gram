"use client";
import Image from "next/image";
import styles from "./list.module.scss";

import { FaBookReader } from "react-icons/fa";
import { MdEdit,MdDeleteSweep  } from "react-icons/md";
import hpFenix from '../../assets/hpfenix.jpeg';
import semcapa from '../../assets/semcapa1.png';

function ListComponent() {
  return (
    <main className={styles.container}>
      <div className={styles.containerList}>
        <h1>Meus livros</h1>
        <ul className={styles.list}>
          <li>
            {
              !hpFenix && <Image src={hpFenix} width={150} height={150} />
            }
            {
              hpFenix && <Image src={semcapa} width={150} height={150} />
            }
            
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <FaBookReader size={22} />
              <MdEdit size={25} />
              <MdDeleteSweep size={25} />
            </div>
          </li>
          <li>
            {
              !hpFenix && <Image src={hpFenix} width={150} height={150} />
            }
            {
              hpFenix && <Image src={semcapa} width={150} height={150} />
            }
            
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <FaBookReader size={22} />
              <MdEdit size={25} />
              <MdDeleteSweep size={25} />
            </div>
          </li>
          <li>
            {
              !hpFenix && <Image src={hpFenix} width={150} height={150} />
            }
            {
              hpFenix && <Image src={semcapa} width={150} height={150} />
            }
            
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <FaBookReader size={22} />
              <MdEdit size={25} />
              <MdDeleteSweep size={25} />
            </div>
          </li>
          <li>
            {
              !hpFenix && <Image src={hpFenix} width={150} height={150} />
            }
            {
              hpFenix && <Image src={semcapa} width={150} height={150} />
            }
            
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <FaBookReader size={22} />
              <MdEdit size={25} />
              <MdDeleteSweep size={25} />
            </div>
          </li>
          <li>
            {
              !hpFenix && <Image src={hpFenix} width={150} height={150} />
            }
            {
              hpFenix && <Image src={semcapa} width={150} height={150} />
            }
            
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <FaBookReader size={22} />
              <MdEdit size={25} />
              <MdDeleteSweep size={25} />
            </div>
          </li>
          <li>
            {
              !hpFenix && <Image src={hpFenix} width={150} height={150} />
            }
            {
              hpFenix && <Image src={semcapa} width={150} height={150} />
            }
            
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <FaBookReader size={22} />
              <MdEdit size={25} />
              <MdDeleteSweep size={25} />
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default ListComponent;
