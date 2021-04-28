import React from 'react';

import { Contracapacss } from './styles';

interface IContracapa{
  image: string | undefined;
  description: string | undefined;
}
const ContraCapa: React.FC<IContracapa> = ({image, description, children}) => {
  return(
    <Contracapacss className="sheet">
      <img src={image} alt={"Imagem "+description}/>
      {children}
    </Contracapacss>
  )
}

export default ContraCapa;