"use client";
import React, { useState, useEffect } from "react";
import styles from "./list.module.scss";

import { auth, db, storage } from "../../services/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  orderBy,
} from "firebase/firestore";

import { FaEdit, FaTrash } from "react-icons/fa";
import { BiSolidSpreadsheet } from "react-icons/bi";

import { GiBookCover } from "react-icons/gi";

import { getDownloadURL, ref } from "firebase/storage";
import AddBookComponent from "../addBookComponent";
import { useDataContext } from "@/app/context/userContext";

function ListComponent() {
  const [userFiles, setUserFiles] = useState([]);
  const { changeIndicator } = useDataContext();
  //ou tentar previa do pdf no lugar
  //depois arrumar pra abri pdf com o botao ler

  useEffect(() => {
    const fetchUserFiles = async () => {
      const user = auth.currentUser;

      if (user) {
        const userId = user.uid;
        const userFilesCollection = collection(db, "users", userId, "books");
        const userFilesQuery = query(userFilesCollection, orderBy('createdAt', 'desc'));

        try {
          const querySnapshot = await getDocs(userFilesQuery);
          const filesData = await Promise.all(
            querySnapshot.docs.map(async (doc) => {
              const fileData = doc.data();
              const imageUrl = await getImageUrl(userId, doc.id);
              const pdfUrl = await getPdfUrl(userId, doc.id);
              return { ...fileData, imageUrl, pdfUrl, docId: doc.id };
            })
          );

          setUserFiles(filesData);
        } catch (error) {
          console.error("Erro ao buscar arquivos do usuário:", error);
        }
      }
    };

    const unsubscribe = auth.onAuthStateChanged(() => {
      fetchUserFiles();
    });

    // Cleanup: remova o listener quando o componente for desmontado
    return () => unsubscribe();
  }, [changeIndicator]);

  const getImageUrl = async (userId, livroId) => {
    const path = `livros/${userId}/${livroId}/imagem.jpg`;
    const imageRef = ref(storage, path);

    try {
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (error) {
      console.error("Erro ao obter URL da imagem:", error);
      return null;
    }
  };

  const getPdfUrl = async (userId, livroId) => {
    const path = `livros/${userId}/${livroId}/livro.pdf`;
    const pdfRef = ref(storage, path);

    try {
      const url = await getDownloadURL(pdfRef);
      return url;
    } catch (error) {
      console.error("Erro ao obter URL do PDF:", error);
      return null;
    }
  };
  return (
    <>
      {userFiles.length < 1 && (
        <div className={styles.containerEmptyBook}>
          <h1>Ainda não possui livros 🙁 </h1>
          <span>
            clique para adicionar
            <AddBookComponent />
          </span>
        </div>
      )}
      {userFiles.length >= 1 && (
        <main className={styles.container}>
          <div className={styles.containerList}>
            <h1>Meus livros</h1>
            <ul className={styles.list}>
              {userFiles.map((files, index) => (
                <li key={files.docId}>
                  <span className={styles.deleteButton}>
                    <FaTrash size={15} color="#CD5C5C" />
                  </span>

                  {files?.imageUrl ? (
                    <img src={files.imageUrl} alt="Oops, Sem Imagem🙁" />
                  ) : (
                    <GiBookCover size={150} />
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
                    <p>{files?.author}</p>
                  </div>
                  <div className={styles.buttons}>
                    <span>
                      <a href={files.pdfUrl} target="_blank">
                        <BiSolidSpreadsheet size={25} />
                      </a>
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
      )}
    </>
  );
}

export default ListComponent;
