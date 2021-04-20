import React, { Fragment, useEffect, useState } from "react";

import Capa from "./components/Capa";
import CardBrand from "./components/CardBrand";
import CardFour from "./components/CardFour";
import CardOne from "./components/CardOne";
import CardThree from "./components/CardThree";
import CardTwo from "./components/CardTwo";
import Contracapa from "./components/ContraCapa";
import Description from "./components/Description";
import api from "./services/api";

interface ICatalogo {
  id: number;
  nome: string;
  descricao: string;
  capa: string;
  contracapa: string;
  itens: IItens[];
}
interface IItens {
  produtoId: string;
  posicao: number | string;
  kit: number | string;
  layout: "CardOne" | "CardTwo" | "CardThree" | "CardFour";
}

interface IProdutos {
  id: number;
  catalogoId: number;
  produtoId: number;
  nome: string;
  referencia: string;
  valor: string;
  descricao: string;
  composicao: string;
  tamanhos: string;
  imagem01: string;
  imagem02: string;
  imagem03: string;
  imagem04: string;
  imagem05: string;
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
  async function loadItenscatalogo(produtoId:string) {
    // const response = await api.get(`itensCatalogo/${catalogo.id}`);
    const response = await api.get(`produtos/${produtoId}`);
    // let novoArrayB = objetos.filter(objeto => objeto.nome === 'Gandalf');
    // const alimentos = produtos.filter(isAlimento);
    console.log(response.data.nome);
    //setProdutos(response.data);
  }

  return (
    <>
      {catalogo.map((catalogopdf) => {
        return (
          <>
            <Capa description={catalogopdf.nome} image={catalogopdf.capa} />

            {catalogopdf.itens.map((item) => {
              return (loadItenscatalogo(item.produtoId))
            })}

            <Contracapa
              description={catalogopdf.nome}
              image={catalogopdf.contracapa}
            >
              <p>
                <strong>{catalogopdf.nome}</strong>
                {catalogopdf.descricao}
              </p>
            </Contracapa>
          </>
        );
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
