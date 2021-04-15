import React from 'react';

import { Contracapacss } from './styles';

const ContraCapa: React.FC = ({children}) => {
  return(
    <Contracapacss className="sheet">
      {children}
    </Contracapacss>
  )
}

export default ContraCapa;