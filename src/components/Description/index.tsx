import React from "react";
import { Descriptioncss } from "./styles";

interface IDescription {
  title: string;
  descricao: string;
  reference: string;
  tamanho: string;
  valor: string;
  composicao: string;
  estilo?: string;
  cor?: string;
}
const Description: React.FC<IDescription> = ({
  title,
  descricao,
  composicao,
  reference,
  tamanho,
  valor,
  estilo,
  cor,
  children,
}) => {
  return (
    <Descriptioncss className={estilo}>
      <h1 style={{color: cor}}>{title}</h1>
      <span>Ref.: {reference}</span>
      <b>{tamanho}</b>
      <strong style={{color: cor}}>R$ {valor}</strong>
      <p>
        {descricao ? <><b>Descrição: </b>{descricao}</> : ""}
        {composicao ? <><b>Composição: </b>{composicao}</> : ""}
      </p>
    </Descriptioncss>
  );
};

export default Description;
