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
  itens: string[];
}
interface IItem {
  id: number;
  catalogoId: number;
  produtoId: number;
  posicao: string;
  layout: "CardOne" | "CardTwo" | "CardThree" | "CardFour";
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
  kit: {
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
  };
}
interface IKit {
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
  const [itens, setItens] = useState<IItem[]>([]);

  useEffect(() => {
    loadCatalogo();
    loadItenscatalogo();
  }, []);
  async function loadCatalogo() {
    const response = await api.get("catalogo");
    setCatalogo(response.data);
  }
  async function loadItenscatalogo() {
    // const response = await api.get(`itensCatalogo/${catalogo.id}`);
    const response = await api.get("itens");
    // let novoArrayB = objetos.filter(objeto => objeto.nome === 'Gandalf');
    // const alimentos = produtos.filter(isAlimento);

    setItens(response.data);
  }

  return (
    <>
      {catalogo.map((catalogopdf) => {
        return (
          <Fragment key={catalogopdf.id}>
            <Capa description={catalogopdf.nome} image={catalogopdf.capa} />

            <Contracapa
              description={catalogopdf.nome}
              image={catalogopdf.contracapa}
            >
              <p>
                <strong>{catalogopdf.nome}</strong>
                {catalogopdf.descricao}
              </p>
            </Contracapa>
            {itens.map((item) => {
              switch (item.layout) {
                case "CardOne":
                  return (
                    <CardOne
                      key={item.id}
                      image={item.imagem01}
                      title={item.nome}
                    >
                      <div className="description-one">
                        <Description
                          title={item.nome}
                          reference={item.referencia}
                          tamanho={item.tamanhos}
                          valor={item.valor}
                          descricao={item.descricao}
                          composicao={item.composicao}
                        />
                      </div>
                    </CardOne>
                  );
                case "CardTwo":
                  return (
                    <CardTwo
                      key={item.id}
                      image={item.imagem01}
                      title={item.nome}
                    >
                      {console.log(item.kit)}
                      <div className="description-two">
                        <Description
                          title={item.nome}
                          estilo="description-top"
                          reference={item.referencia}
                          tamanho={item.tamanhos}
                          valor={item.valor}
                          descricao={item.descricao}
                          composicao={item.composicao}
                        />

                        <Description
                          title={item.nome}
                          estilo="description-bottom"
                          reference={item.referencia}
                          tamanho={item.tamanhos}
                          valor={item.valor}
                          descricao={item.descricao}
                          composicao={item.composicao}
                        />
                      </div>
                    </CardTwo>
                  );
                case "CardThree":
                  return (
                    <CardThree
                      descricao={item.nome}
                      imagens={[item.imagem01, item.imagem03, item.imagem04]}
                    />
                  );
                case "CardFour":
                  return (
                    <CardFour
                      descricao="Blusa Floral Babados Maria"
                      imagens={[
                        item.imagem02,
                        item.imagem03,
                        item.imagem04,
                        item.imagem05,
                      ]}
                    />
                  );

                default:
                  console.log("Padrao");
              }
            })}
          </Fragment>
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
