import React from 'react'

interface IDescription {
    title: string;
    descricao: string;
    reference: string;
    tamanho: string;
    valor: string;
    composicao: string;
    estilo?: string;
  }
const Description: React.FC<IDescription> = ({title, descricao, composicao, reference, tamanho, valor, estilo, children}) =>{
    return(
        
          <div className={estilo}>
            <h1>{title}</h1>
            <span>Ref.: {reference}</span>
            <b>{tamanho}</b>
            <strong>R$ {valor}</strong>
            <p>
                <b>Descrição:</b>
                {descricao}
                <b>Compsição:</b>
                {composicao}
            </p>
          
        </div>
    )
}

export default Description;