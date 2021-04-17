import React from 'react';

import { Cardzerocss } from './styles';

interface ICardzero{
  image: string;
  description: string;
}
const CardZero: React.FC<ICardzero> = ({image, description}) => {
  return(
    <Cardzerocss className="sheet">
      <img src={image} alt={"Imagem "+description}/>
    </Cardzerocss>
  )
}

export default CardZero;