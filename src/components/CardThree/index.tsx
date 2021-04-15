import React from "react";
import { Cardthreecss } from "./styles";

const CardTree: React.FC = ({ children }) => {
  return <Cardthreecss className="sheet">{children}</Cardthreecss>;
};

export default CardTree;
