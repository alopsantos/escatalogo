import React from "react";

import { Cardonecss } from "./styles";

const CardOne: React.FC = ({ children }) => {
  return <Cardonecss className="sheet">{children}</Cardonecss>;
};

export default CardOne;
