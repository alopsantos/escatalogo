import React from 'react'

import {Cardfourcss} from './styles';

const CardFour: React.FC = ({children}) =>{
    return(
        <Cardfourcss className="sheet">
            {children}
        </Cardfourcss>
    )
}

export default CardFour;