import React from "react";

import {Capacss} from './styles';

const Capa: React.FC = ({children}) => {
  return (
    <Capacss className="sheet">
      {children}
    </Capacss>
  );
};

export default Capa;
