import React from "react";

import { IconProps } from "react-feather";
import { Link } from "react-router-dom";

import { CardStatus } from "./styles";

interface ICardstatus {
  pagina: string;
  titulo: string;
  icon: React.ComponentType<IconProps>;
}

const Cardstatus: React.FC<ICardstatus> = ({ pagina, titulo, icon: Icon }) => {
  return (
    <Link to={pagina}>
      <CardStatus>
        <h3>
          <span>Gerenciar</span>
          {Icon && <Icon size={30} color="#EF1C8F" />}
        </h3>
        <p>{titulo}</p>
      </CardStatus>
    </Link>
  );
};

export default Cardstatus;
