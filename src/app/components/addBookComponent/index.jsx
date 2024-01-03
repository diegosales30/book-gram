"use client";
import { useState } from "react";
import styles from "./add.module.scss";

import { FaPlusCircle } from "react-icons/fa";
import { IoMdCloseCircle, IoMdImages } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";

import { auth, googleAuthProvider, db } from '../../services/firebase'
import { collection, addDoc, doc } from 'firebase/firestore';

function AddBookComponent() {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  //search for image
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  //search  for pdf
  const handlePdfChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type === "application/pdf") {
      const pdfUrl = URL.createObjectURL(file);
      setSelectedPdf(pdfUrl);
    }
  };

  //post book on google firebase
  const handleBookSubmit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    const userId = user.uid;

    const bookCollectionRef = collection(db, 'users', userId, 'books');

    const book = {
      title,
      author,
      pdf: selectedPdf,
      image: selectedImage,
    };

    console.log(book.title, book.author, book.pdf, book.image);

    await addDoc(bookCollectionRef, book);
    // Clear file inputs after submission
    setTitle('');
    setAuthor('');
    setSelectedPdf(null);
    setSelectedImage(null);
    setOpenModal(false);
  };

  return (
    <>
      <div className={styles.plusContainer}>
        <FaPlusCircle size={30} onClick={handleOpenModal} />
        {/* <p>Adicionar livro</p> */}
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
              <input type="text" maxLength={50} placeholder="Título do livro" required  onChange={(e) => setTitle(e.target.value)} />
              <input type="text" maxLength={30} placeholder="Autor" required  onChange={(e) => setAuthor(e.target.value)}/>
              {/* selecionar pdf */}
              <div className={styles.pdfPicker}>
                <label htmlFor="pdfInput">
                  <span>Buscar PDF</span>
                  <FaFilePdf size={20} />
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  id="pdfInput"
                  required
                  onChange={handlePdfChange}
                />
                {/* pdf selected */}
                {selectedPdf && (
                  <div className={styles.pdfPicker}>
                    <p>PDF Selecionado</p>
                    {/* <embed
                      src={selectedPdf}
                      type="application/pdf"
                      width="150px"
                      height="150px"
                    /> */}
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
                  onChange={handleImageChange}
                />
              </div>
              {/* img selecionada */}
              {selectedImage && (
                <div className={styles.imagePicker}>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "15px",
                    }}
                  />
                </div>
              )}
              <button type="submit" className={styles.btnSend}>Salvar livro</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddBookComponent;
