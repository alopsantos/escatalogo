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
        {imagens.map((image, i = image.length) => {
          if (i >= 1) {
            return (
              <img
                key={i}
                src={image}
                className={"item-" + (i-1)}
                alt={"Imagem do produto " + descricao}
              />
            );
          }
        })}
      </article>
    </Cardfourcss>
  );
};

export default CardFour;
