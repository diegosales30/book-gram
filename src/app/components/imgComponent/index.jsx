import Image from 'next/image';
import React from 'react';

function ImageComponent({ imageUrl }) {
  return (
    <div>
      {/* <img src={imageUrl} alt="Imagem do usuário" /> */}
      <Image src={imageUrl} width={180} height={180} />
    </div>
  );
}

export default ImageComponent;