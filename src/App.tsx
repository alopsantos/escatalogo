import React, { Fragment, useEffect, useState } from "react";

import Capa from "./components/Capa";
import CardBrand from "./components/CardBrand";
import CardFour from "./components/CardFour";
import CardOne from "./components/CardOne";
import CardThree from "./components/CardThree";
import CardTwo from "./components/CardTwo";
import Contracapa from "./components/ContraCapa";
import Description from "./components/Description";
import Loading from "./components/Loading";
import api from "./services/api";

interface ICatalogo {
  id: number;
  nome: string;
  descricao: string;
  capa: string;
  contracapa: string;
  itens: IProdutos[];
  posicao: number | string;
  kit: number | string;
}
interface IItens {
}
interface IProdutos {
  id: number;
  catalogoId: number;
  produtoId: number;
  layout: "CardOne" | "CardTwo" | "CardThree" | "CardFour";
  nome: string;
  referencia: string;
  valor: string;
  descricao: string;
  composicao: string;
  tamanhos: string;
  imagens: string[];
}

function App() {
  const [catalogo, setCatalogo] = useState<ICatalogo[]>([]);
  const [produtos, setProdutos] = useState<IProdutos[]>([]);
  //const [itens, setItens] = useState([]);

  useEffect(() => {
    loadCatalogo();
  }, []);
  async function loadCatalogo() {
    const response = await api.get("catalogo");
    setCatalogo(response.data);
  }

  function listarCardtwo() {

  }

  return (
    <>
      {catalogo.map(catalogoPdf => {
        return (
          <Fragment key={catalogoPdf.id}>
            <Capa description={catalogoPdf.nome} image={catalogoPdf.capa} />
            <Contracapa description={catalogoPdf.descricao} image={catalogoPdf.contracapa}>
              <p>
                <strong>
                  {catalogoPdf.nome}
                </strong>
                {catalogoPdf.descricao}
              </p>
            </Contracapa>
            {catalogoPdf.itens.map(item => {
              switch (item.layout) {
                case "CardOne":
                  return (
                    <CardOne key={item.id} image={item.imagens[0]} title={item.nome}>
                      <Description title={item.nome} descricao={item.descricao} composicao={item.composicao} reference={item.referencia} tamanho={item.tamanhos} valor={item.valor} />
                    </CardOne>
                  );
                case "CardTwo":
                  return (
                    <CardTwo image={item.imagens[0]} title={item.nome} >
                      <Description descricao={item.descricao} composicao={item.composicao} reference={item.referencia} tamanho={item.tamanhos} title={item.nome} valor={item.valor} estilo="description-two" />
                    </CardTwo>
                  )
                case "CardThree":
                  return (
                    <CardThree  key={item.id} imagens={item.imagens} descricao={item.nome} />
                  )
                case "CardFour":
                  return (
                    <CardFour key={item.id} imagens={item.imagens} descricao={item.nome} />
                  )
                default:
                  console.log("Padrao");
              }
            })}
          </Fragment>
        )

      })}
      <CardBrand>
        <img
          src="https://estacaodamodastore.vteximg.com.br/arquivos/LogoAlineMezzariBrand.svg"
          width="500px"
          alt=""
        />
        <p>
          <img
            src="https://estacaodamodastore.vteximg.com.br/arquivos/instagram.svg"
            alt=""
          />
          @alinemezzaribrand
        </p>
        <p>
          <img
            src="https://estacaodamodastore.vteximg.com.br/arquivos/whatsapp.svg"
            alt=""
          />
          <span>
            Santa Terezinha de Itaipu - PR
            <br />
            Rua dos estudantes, 1906 - Centro <br />
            CEP: 85875-000 <br />
            (45) 9135-5885 <br />
          </span>
        </p>
        <p>
          <img
            src="https://estacaodamodastore.vteximg.com.br/arquivos/whatsapp.svg"
            alt=""
          />
          <span>
            São Paulo - SP <br />
            Rua Professor Cesare Lombroso, 259 <br />
            Fashion Mall - Loja 41 <br />
            CEP: 01122-020 <br />
            (11) 94457-9998 <br />
          </span>
        </p>
      </CardBrand>
    </>
  );
}

export default App;
