import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import Capa from "../../components/Capa";
import CardBrand from "../../components/CardBrand";
import CardFour from "../../components/CardFour";
import CardOne from "../../components/CardOne";
import CardThree from "../../components/CardThree";
import CardTwo from "../../components/CardTwo";
import CardZero from "../../components/CardZero";
import Contracapa from "../../components/ContraCapa";
import Description from "../../components/Description";
import api from "../../services/api";

interface ICatalogo {
  id: number;
  nome: string;
  descricao: string;
  capa: string;
  contracapa: string;
  cor: string;
  itens: IItens[];
  posicao: number | string;
}
interface IItens {
  id: number;
  kit: IProdutos;
  catalogoId: number;
  layout: "CardZero" | "CardOne" | "CardTwo" | "CardThree" | "CardFour";
  nome: string;
  referencia: string;
  valor: string;
  descricao: string;
  composicao: string;
  tamanhos: string;
  imagens: string[];
}
interface IProdutos {
  produtoId: number;
  nome: string;
  referencia: string;
  valor: string;
  descricao: string;
  composicao: string;
  tamanhos: string;
  imagens: string[];
}
interface IBrand {
  instagram: string;
  logo: string;
  loja: ILoja[];
}
interface ILoja {
  nome: string;
  endereco: string;
  cep: string;
  telefone: string;
  whatsapp: string;
}
type TParams = { id: string };
const Catalogo: React.FC = () => {
  let { id } = useParams<TParams>();
  const [catalogo, setCatalogo] = useState<ICatalogo>();
  const [brand, setBrand] = useState<IBrand>();

  useEffect(() => {
    carregarCatalogo(id);
    carregarBrand();
  }, [id]);

  async function carregarCatalogo(catalogoId: string) {
    const resulte = await api.get(`catalogo/${catalogoId}`);
    setCatalogo(resulte.data);
  }

  async function carregarBrand() {
    const resulte = await api.get("brand/1");
    setBrand(resulte.data);
  }

  return (
    <>
      <Capa description={catalogo?.nome} image={catalogo?.capa} />
      <Contracapa
        description={catalogo?.descricao}
        image={catalogo?.contracapa}
      >
        <p>
          <strong>{catalogo?.nome}</strong>
          {catalogo?.descricao}
        </p>
      </Contracapa>
      {catalogo?.itens.map((item) => {
        switch (item.layout) {
          case "CardZero":
            return <CardZero image={item.imagens[5]} description={item.nome} />;
          case "CardOne":
            return (
              <CardOne key={item.id} image={item.imagens[0]} title={item.nome}>
                <Description
                  title={item.nome}
                  descricao={item.descricao}
                  composicao={item.composicao}
                  reference={item.referencia}
                  tamanho={item.tamanhos}
                  valor={item.valor}
                  estilo="description-one"
                  cor={catalogo.cor}
                />
              </CardOne>
            );
          case "CardTwo":
            return (
              <CardTwo image={item.imagens[0]} title={item.nome}>
                <Description
                  descricao={item.descricao}
                  composicao={item.composicao}
                  reference={item.referencia}
                  tamanho={item.tamanhos}
                  title={item.nome}
                  valor={item.valor}
                  estilo="description-top"
                  cor={catalogo.cor}
                />
                <Description
                  descricao={item.kit.descricao}
                  composicao={item.kit.composicao}
                  reference={item.kit.referencia}
                  tamanho={item.kit.tamanhos}
                  title={item.kit.nome}
                  valor={item.kit.valor}
                  estilo="description-bottom"
                  cor={catalogo.cor}
                />
              </CardTwo>
            );
          case "CardThree":
            return (
              <CardThree
                key={item.id}
                imagens={item.imagens}
                descricao={item.nome}
              />
            );
          case "CardFour":
            return (
              <CardFour
                key={item.id}
                imagens={item.imagens}
                descricao={item.nome}
              />
            );
          default:
            break;
        }
      })}
      <CardBrand>
        <img src={brand?.logo} width="500px" alt={brand?.instagram} />
        <p>
          <FaInstagram size="48" color={catalogo?.cor} />
          {brand?.instagram}
        </p>
        <p>
          <FaWhatsapp size="48" color={catalogo?.cor} />
          <span>
            {brand?.loja[0].nome}
            <br />
            {brand?.loja[0].endereco}
            <br />
            Cep: {brand?.loja[0].cep}
            <br />
            {brand?.loja[0].telefone ? brand?.loja[0].telefone : ""}
            <br />
            {brand?.loja[0].whatsapp}
            <br />
          </span>
        </p>
        <p>
          <FaWhatsapp size="48" color={catalogo?.cor} />
          <span>
            {brand?.loja[1].nome}
            <br />
            {brand?.loja[1].endereco}
            <br />
            Cep: {brand?.loja[1].cep}
            <br />
            {brand?.loja[1].telefone ? brand?.loja[1].telefone : ""}
            <br />
            {brand?.loja[1].whatsapp}
            <br />
          </span>
        </p>
      </CardBrand>
    </>
  );
};

export default Catalogo;
