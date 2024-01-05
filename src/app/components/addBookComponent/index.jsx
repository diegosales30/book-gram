"use client";
import { useState } from "react";
import styles from "./add.module.scss";

import { FaPlusCircle } from "react-icons/fa";
import { IoMdCloseCircle, IoMdImages } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";

import { auth, db, storage } from "../../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useDataContext } from "@/app/context/userContext";
import { toast } from "react-toastify";


function AddBookComponent() {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const {setChangeIndicator } = useDataContext();

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleBookSubmit = async (e) => {
    setOpenModal(false);
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      // Usuário não autenticado, lidar com isso conforme necessário
      return;
    }
    const userId = user.uid;
    const bookCollectionRef = collection(db, "users", userId, "books");
    const book = {
      title,
      author,
      createdAt: serverTimestamp(),
    };
    // Adiciona os dados do livro ao Firestore
    const livroRef = await addDoc(bookCollectionRef, book);

    // Obtem o ID gerado pelo Firestore
    const livroId = livroRef.id;

    // Upload da imagem para o Storage
    const imagemPath = `livros/${userId}/${livroId}/imagem.jpg`;
    const imagemRef = ref(storage, imagemPath);
    await uploadBytes(imagemRef, selectedImage);

    // Upload do PDF para o Storage
    const pdfPath = `livros/${userId}/${livroId}/livro.pdf`;
    const pdfRef = ref(storage, pdfPath);
    await uploadBytes(pdfRef, selectedPdf);

    // Limpar os inputs do arquivo após o envio
    setTitle("");
    setAuthor("");
    setSelectedPdf(null);
    setSelectedImage(null);
    toast.success('Livro adicionado com sucesso!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
 
    setChangeIndicator((prev) => !prev);
  };
  return (
    <>
      <div className={styles.plusContainer}>
        <FaPlusCircle size={30} onClick={handleOpenModal} />
      </div>
      {openModal && (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <IoMdCloseCircle
              size={25}
              onClick={handleOpenModal}
              color="#CD5C5C"
              className={styles.closeIcon}
            />
            <form className={styles.modalForm} onSubmit={handleBookSubmit}>
              <h3>Adicionar livro</h3>
              <input
                type="text"
                maxLength={50}
                placeholder="Título do livro"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                maxLength={30}
                placeholder="Autor"
                required
                onChange={(e) => setAuthor(e.target.value)}
              />
              {/* selecionar pdf */}
              <div className={styles.pdfPicker}>
                <label htmlFor="pdfInput" >
                  <span>Buscar PDF</span>
                  <FaFilePdf size={20} />
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  id="pdfInput"
                  required
                  onChange={(e) => setSelectedPdf(e.target.files[0])}
                />
                {/* pdf selected */}
                {selectedPdf && (
                  <div className={styles.pdfPicker}>
                    <p>PDF Selecionado</p>
                  </div>
                )}
              </div>

              {/* selecionar img */}
              <div className={styles.imagePicker}>
                <label htmlFor="image">
                  <span>Imagem (opcional)</span>
                  <IoMdImages size={25} />
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="image"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                {/* img selecionada */}
                {selectedImage && <p>Imagem Selecionada</p>}
              </div>

              <button type="submit" className={styles.btnSend}>
                Salvar livro
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddBookComponent;
