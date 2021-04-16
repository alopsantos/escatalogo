import React, { useEffect, useState } from "react";

import { Cardfourcss } from "./styles";

interface ICardfour {
  image0: string;
  image1: string;
  image2: string;
  image3: string;
  description0?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  imagens: object[];
}
interface IImages {
  img: string;
}
const CardFour: React.FC<ICardfour> = ({
  image0,
  image1,
  image2,
  image3,
  description0,
  description1,
  description2,
  description3,
  imagens
}) => {
  const [foto, setImagens] = useState<IImages[]>([]);
  useEffect(() => {
    imagens.map((image) => {
      setImagens(image.foto)
    })
  }, [])
  return (
    <Cardfourcss className="sheet">
      <article className="card-produto-four">
        {imagens.map((image) => {
          return (
            console.log(foto.img)
          );
        })}
        <img src={image0} className="item-1" alt={"Imagem " + description0} />
        <img src={image1} className="item-2" alt={"Imagem " + description1} />
        <img src={image2} className="item-3" alt={"Imagem " + description2} />
        <img src={image3} className="item-4" alt={"Imagem " + description3} />
      </article>
    </Cardfourcss>
  );
};

export default CardFour;
