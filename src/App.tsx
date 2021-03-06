import React from "react";

import Capa from "./components/Capa";
import CardBrand from "./components/CardBrand";
import CardFour from "./components/CardFour";
import CardOne from "./components/CardOne";
import CardTree from "./components/CardThree";
import CardTwo from "./components/CardTwo";
import Contracapa from "./components/ContraCapa";

function App() {
  return (
    <>
      <Capa>
        <img
          className="card-capa"
          src="https://github.com/alopsantos/ES-Catalog/blob/master/images/capa.jpg?raw=true"
          alt=""
        />
      </Capa>

      <Contracapa>
        <img
          className="card-contra-capa"
          src="https://github.com/alopsantos/ES-Catalog/blob/master/images/contra-capa.jpg?raw=true"
          alt=""
        />
        <p>
          <strong>My Way</strong>A arte de encontrar novos caminhos e se
          encontrar, nos faz apreciar a nós mesmos nesta jornada. Trazer essa
          es- tética junto ao conforto e sosticação faz parte da essência da
          Aline Mezzari Brand. Trazemos a coleção "My Way" com novos ares, novas
          possibilidades e novos caminhos.
        </p>
      </Contracapa>

      <CardOne>
        <article>
          <img
            className="produto-one"
            src="https://github.com/alopsantos/ES-Catalog/blob/master/images/produto-01.jpg?raw=true"
            alt=""
          />
          <div className="description-one">
            <h1>Parka Dulcie Tela e Renda Preto</h1>
            <span>Ref.: 1058</span>
            <b>P/M</b>
            <strong>R$ 169,90</strong>
            <p>
              <b>Descrição:</b>
              Parka de tela crochet, couro, renda chantily e sianinha. Punhos de
              elástico.
              <br />
              <b>Composição:</b>
              00% 100% poliéster
            </p>
          </div>
        </article>
      </CardOne>

      <CardTwo>
        <article>
          <img
            className="produto-left-dual"
            src="https://github.com/alopsantos/ES-Catalog/blob/master/images/produto-02.jpg?raw=trueg"
            alt=""
          />
          <div className="description-two">
            <div className="description-top">
              <h1>Parka Dulcie Tela e Renda Preto</h1>
              <span>Ref.: 1058</span>
              <b>P/M/G</b>
              <strong>R$ 169,90</strong>
              <p>
                <b>Descrição:</b>
                Parka de tela crochet, couro, renda chantily e sianinha. Punhos
                de elástico.
                <br />
                <b>Composição:</b>
                00% 100% poliéster
              </p>
            </div>

            <div className="description-bottom">
              <h1>Parka Dulcie Tela e Renda Preto</h1>
              <span>Ref.: 1058</span>
              <b>P/M/G</b>
              <strong>R$ 169,90</strong>
              <p>
                <b>Descrição:</b>
                Parka de tela crochet, couro, renda chantily e sianinha. Punhos
                de elástico.
                <br />
                <b>Composição:</b>
                100% poliéster
              </p>
            </div>
          </div>
        </article>
      </CardTwo>

      <CardTree>
        <article className="card-produto-three">
          <div>
            <img
              className="item-1"
              src="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-05.jpg?raw=true"
              alt=""
            />
            <img
              className="item-2"
              src="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-06.jpg?raw=true"
              alt=""
            />
          </div>
          <img
            className="item-3"
            src="https://github.com/alopsantos/ES-Catalog/blob/master/images/produto-02.jpg?raw=true"
            alt=""
          />
        </article>
      </CardTree>

      <CardFour>
        <article className="card-produto-four">
          <img
            className="item-1"
            src="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-01.jpg?raw=true"
            alt=""
          />
          <img
            className="item-2"
            src="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-02.jpg?raw=true"
            alt=""
          />
          <img
            className="item-3"
            src="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-03.jpg?raw=true"
            alt=""
          />
          <img
            className="item-4"
            src="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-04.jpg?raw=true"
            alt=""
          />
        </article>
      </CardFour>

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
