import React from "react";

import { Cardonecss } from "./styles";

interface ICardone {
  image: string;
  title: string;
}
const CardOne: React.FC<ICardone> = ({
  image,
  title,
  children,
}) => {
  return (
    <Cardonecss className="sheet">
      <article>
        <img src={image} alt={"Imagem " + title} />

        {children}
      </article>
    </Cardonecss>
  );
};

export default CardOne;
