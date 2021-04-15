import React from 'react';


import { Cardtwocss } from './styles';

const CardTwo: React.FC = ({children}) => {
  return (
    <Cardtwocss className="sheet">
      {children}
    </Cardtwocss>
  )
}

export default CardTwo;