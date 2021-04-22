import React from "react";
import { Cardthreecss } from "./styles";

interface ICardthree {
  descricao: string;
  imagens: string[];
}
const CardThree: React.FC<ICardthree> = ({
  descricao,
  imagens
}) => {
  return (
    <Cardthreecss className="sheet">
      <article className="card-produto-three">
        <div>
          <img src={imagens[1]} className="item-1" alt={"Imagem do produto " + descricao} />
          <img src={imagens[2]} className="item-2" alt={"Imagem do produto " + descricao} />
        </div>
        <img src={imagens[0]} className="item-3" alt={"Imagem do produto " + descricao} />
      </article>
    </Cardthreecss>
  );
};

export default CardThree;
