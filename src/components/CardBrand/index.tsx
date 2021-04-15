import React from "react";

import { Cardbrandcss } from "./styles";

const CardBrand: React.FC = ({ children }) => {
  return (
    <Cardbrandcss className="sheet">
      <article>{children}</article>
    </Cardbrandcss>
  );
};

export default CardBrand