import Reac from "react";

import { Cardfourcss } from "./styles";

interface ICardfour {
  descricao?: string;
  imagens: string[];
}
const CardFour: React.FC<ICardfour> = ({ imagens, descricao }) => {
  return (
    <Cardfourcss className="sheet">
      <article className="card-produto-four">
        {imagens.map((image, i = imagens.length) => {
          return (
            <img
              key={i}
              src={image}
              className={"item-" + i}
              alt={"Imagem do produto " + descricao}
            />
          );
        })}
      </article>
    </Cardfourcss>
  );
};

export default CardFour;
