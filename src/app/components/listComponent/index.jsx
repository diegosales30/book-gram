"use client";
import Image from "next/image";
import styles from "./list.module.scss";

import {FaEdit, FaTrash} from "react-icons/fa";
import { BiSolidSpreadsheet } from "react-icons/bi";

import hpFenix from "../../assets/hpfenix.jpeg";
import semcapa from "../../assets/default.png";

function ListComponent() {
  return (
    <main className={styles.container}>
      <div className={styles.containerList}>
        <h1>Meus livros</h1>
        <ul className={styles.list}>
          <li>
            <span className={styles.deleteButton}>
                <FaTrash  size={20} color="#CD5C5C"  />   
            </span>
            {!hpFenix && <Image src={hpFenix} width={150} height={150}  />}
            {hpFenix && <Image src={semcapa} width={125} height={125} alt="img do livro default" />}
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <span>
                <BiSolidSpreadsheet size={25} />
                <p>ler</p>
              </span>
              <span>
                <FaEdit size={25} />
                <p>editar</p>
              </span>
              {/* <span>
                <RiDeleteBin2Fill size={25} />
                <p>excluir</p>
              </span> */}
            </div>
          </li>
          <li>
            <span className={styles.deleteButton}>
                <FaTrash  size={20} color="#CD5C5C"  />   
            </span>
            {!hpFenix && <Image src={hpFenix} width={150} height={150}  />}
            {hpFenix && <Image src={semcapa} width={125} height={125} alt="img do livro default" />}
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <span>
                <BiSolidSpreadsheet size={25} />
                <p>ler</p>
              </span>
              <span>
                <FaEdit size={25} />
                <p>editar</p>
              </span>
              {/* <span>
                <RiDeleteBin2Fill size={25} />
                <p>excluir</p>
              </span> */}
            </div>
          </li>
          <li>
            <span className={styles.deleteButton}>
                <FaTrash  size={20} color="#CD5C5C"  />   
            </span>
            {!hpFenix && <Image src={hpFenix} width={150} height={150}  />}
            {hpFenix && <Image src={semcapa} width={125} height={125} alt="img do livro default" />}
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <span>
                <BiSolidSpreadsheet size={25} />
                <p>ler</p>
              </span>
              <span>
                <FaEdit size={25} />
                <p>editar</p>
              </span>
              {/* <span>
                <RiDeleteBin2Fill size={25} />
                <p>excluir</p>
              </span> */}
            </div>
          </li>
          <li>
            <span className={styles.deleteButton}>
                <FaTrash  size={20} color="#CD5C5C"  />   
            </span>
            {!hpFenix && <Image src={hpFenix} width={150} height={150}  />}
            {hpFenix && <Image src={semcapa} width={125} height={125} alt="img do livro default" />}
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <span>
                <BiSolidSpreadsheet size={25} />
                <p>ler</p>
              </span>
              <span>
                <FaEdit size={25} />
                <p>editar</p>
              </span>
              {/* <span>
                <RiDeleteBin2Fill size={25} />
                <p>excluir</p>
              </span> */}
            </div>
          </li>
          <li>
            <span className={styles.deleteButton}>
                <FaTrash  size={20} color="#CD5C5C"  />   
            </span>
            {!hpFenix && <Image src={hpFenix} width={150} height={150}  />}
            {hpFenix && <Image src={semcapa} width={125} height={125} alt="img do livro default" />}
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <span>
                <BiSolidSpreadsheet size={25} />
                <p>ler</p>
              </span>
              <span>
                <FaEdit size={25} />
                <p>editar</p>
              </span>
              {/* <span>
                <RiDeleteBin2Fill size={25} />
                <p>excluir</p>
              </span> */}
            </div>
          </li>
          <li>
            <span className={styles.deleteButton}>
                <FaTrash  size={20} color="#CD5C5C"  />   
            </span>
            {!hpFenix && <Image src={hpFenix} width={150} height={150}  />}
            {hpFenix && <Image src={semcapa} width={125} height={125} alt="img do livro default" />}
            <div>
              <h2>Harry potter e a ordem da fenix</h2>
              <p>Autor: J.K Rowling</p>
            </div>
            <div className={styles.buttons}>
              <span>
                <BiSolidSpreadsheet size={25} />
                <p>ler</p>
              </span>
              <span>
                <FaEdit size={25} />
                <p>editar</p>
              </span>
              {/* <span>
                <RiDeleteBin2Fill size={25} />
                <p>excluir</p>
              </span> */}
            </div>
          </li>
        </ul>
      </div>
      
    </main>
    
  );
}

export default ListComponent;
