import React from "react";

import { Cardtwocss } from "./styles";

interface ICardtwo {
  image: string;
  title: string;
}

const CardTwo: React.FC<ICardtwo> = ({ image, title, children }) => {
  return (
    <Cardtwocss className="sheet">
      <article>
        <img src={image} alt={"Imagem " + title} />
        <div className="description-two">{children}</div>
      </article>
    </Cardtwocss>
  );
};

export default CardTwo;
