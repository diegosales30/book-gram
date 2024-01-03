"use client";
import React, { useState, useEffect } from "react";
import styles from "./list.module.scss";

import { auth, db } from "../../services/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import { FaEdit, FaTrash } from "react-icons/fa";
import { BiSolidSpreadsheet } from "react-icons/bi";

import { GiBookCover } from "react-icons/gi";

function ListComponent() {
  const [userFiles, setUserFiles] = useState([]);
  //criar um contexto global para qundo for adicionado la
  //ele verifica o state, se mudar , ele atualiza o useEfecct
  //e essa pagina
  //-------------------------//
  //arruma o problema da img blob quebrada
  //ou tentar previa do pdf no lugar
  //depois arrumar pra abri pdf com o botao ler

  useEffect(() => {
    const fetchUserFiles = async () => {
      const user = auth.currentUser;

      if (user) {
        const userId = user.uid;
        const userFilesCollection = collection(db, 'users', userId, 'books');
        const userFilesQuery = query(userFilesCollection);

        try {
          const querySnapshot = await getDocs(userFilesQuery);
          const filesData = querySnapshot.docs.map((doc) => doc.data());
          setUserFiles(filesData);
        } catch (error) {
          console.error('Erro ao buscar arquivos do usuário:', error);
        }
      }
    };
  
    // Adicionando um listener de autenticação para atualizar os arquivos quando o usuário se autenticar
    const unsubscribe = auth.onAuthStateChanged(() => {
      fetchUserFiles();
    });

    // Cleanup: remova o listener quando o componente for desmontado
    return () => unsubscribe();
  }, []);
  
  console.log(userFiles);
  return (
    <main className={styles.container}>
      <div className={styles.containerList}>
        <h1>Meus livros</h1>
        <ul className={styles.list}>
          {userFiles.map((files, index) => (
            <li key={files.title}>
              <span className={styles.deleteButton}>
                <FaTrash size={15} color="#CD5C5C" />
              </span>
              {files?.image ? (
                <img
                src={files.image}
                alt='capa do livro'
              />
              ) : (
                <GiBookCover size={100} />
              )}
              {/* <div className={styles.divPdf}>
                <embed
                      src={files.title}
                      type="application/pdf"
                      width="250px"
                      height="250px"
                    />
              </div> */}
              <div>
                <h2>{files?.title}</h2>
                <p>Autor: {files?.author}</p>
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ListComponent;
