import React from "react";

import { Capacss } from "./styles";

interface ICapa {
  image?: string;
  description?: string;
}

const Capa: React.FC<ICapa> = ({ image, description }) => {
  return (
    <Capacss className="sheet">
      <img src={image} alt={"Imagem"+ description} />
    </Capacss>
  );
};

export default Capa;
