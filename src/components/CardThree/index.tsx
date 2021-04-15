import React from "react";
import { Cardthreecss } from "./styles";

interface ICardthree {
  image0: string;
  image1: string;
  image2: string;
  description0?: string;
  description1?: string;
  description2?: string;
}
const CardThree: React.FC<ICardthree> = ({
  image0,
  image1,
  image2,
  description0,
  description1,
  description2,
}) => {
  return (
    <Cardthreecss className="sheet">
      <article className="card-produto-three">
        <div>
          <img src={image0} className="item-1" alt={"Imagem " + description0} />
          <img src={image1} className="item-2" alt={"Imagem " + description1} />
        </div>
        <img src={image2} className="item-3" alt={"Imagem " + description2} />
      </article>
    </Cardthreecss>
  );
};

export default CardThree;
