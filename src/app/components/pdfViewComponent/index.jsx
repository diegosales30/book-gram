"use client";

import React, { useRef, useState } from "react";
import styles from "./pdfview.module.scss";
import { CgCloseO } from "react-icons/cg";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const PdfViewer = ({ isOpen, pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const embedRef = useRef(null);

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      embedRef.current.src = `${pdfUrl}#page=${pageNumber - 1}`;
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
      embedRef.current.src = `${pdfUrl}#page=${pageNumber + 1}`;
    }
    setPageNumber(pageNumber + 1);
  };

  const onEmbedLoad = () => {
    const embedElement = embedRef.current;
    const pdfDocument = embedElement && embedElement.getSVGDocument();

    if (pdfDocument) {
      setNumPages(pdfDocument.documentElement.getAttribute('data-pdfjs-num-pages'));
    }
  };
  return (
    <div className={styles.container}>
      {/* <embed src={pdfUrl} type="application/pdf" /> */}
      <embed
        ref={embedRef}
        src={`${pdfUrl}#page=${pageNumber}`}
        type="application/pdf"
        onLoad={onEmbedLoad}
      />
      <div className={styles.footerbtn}>
        <div className={styles.btnarrow}>
          <FaArrowAltCircleLeft
            size={25}
            onClick={handlePrevPage}
            disabled={pageNumber <= 1}
          />
          <FaArrowAltCircleRight
            size={25}
            onClick={handleNextPage}
            disabled={pageNumber >= numPages}
          />
        </div>

        <CgCloseO size={25} onClick={isOpen} />
      </div>
    </div>
  );
};

export default PdfViewer;

