import React from "react";

import Capa from "./components/Capa";
import CardBrand from "./components/CardBrand";
import CardFour from "./components/CardFour";
import CardOne from "./components/CardOne";
import CardThree from "./components/CardThree";
import CardTwo from "./components/CardTwo";
import Contracapa from "./components/ContraCapa";
import Description from "./components/Description";

function App() {
  return (
    <>
      <Capa
        description="Nome da coleção"
        image="https://github.com/alopsantos/ES-Catalog/blob/master/images/capa.jpg?raw=true"
      />

      <Contracapa
        image="https://github.com/alopsantos/ES-Catalog/blob/master/images/contra-capa.jpg?raw=true"
        description="Nome da coleção"
      >
        <p>
          <strong>My Way</strong>A arte de encontrar novos caminhos e se
          encontrar, nos faz apreciar a nós mesmos nesta jornada. Trazer essa
          es- tética junto ao conforto e sosticação faz parte da essência da
          Aline Mezzari Brand. Trazemos a coleção "My Way" com novos ares, novas
          possibilidades e novos caminhos.
        </p>
      </Contracapa>

      <CardOne
        image="https://github.com/alopsantos/ES-Catalog/blob/master/images/produto-01.jpg?raw=true"
        title="Blusa Maria Fernanda Babados Vermelho"
      >
        <div className="description-one">
          <Description
            title="Blusa Maria Fernanda Babados Vermelho"
            reference="1058"
            tamanho="P/M/G"
            valor="169,90"
            descricao="
          Parka de tela crochet, couro, renda chantily e sianinha. Punhos de
          elástico."
            composicao="100% poliéster"
          />
        </div>
      </CardOne>

      <CardTwo
        image="https://github.com/alopsantos/ES-Catalog/blob/master/images/produto-02.jpg?raw=true"
        title="Parka Dulcie Tela e Renda Preto"
      >
        <div className="description-two">
          <Description
            title="Parka Maria Fernanda Verde"
            estilo="description-top"
            reference="1056"
            tamanho="P/G"
            valor="299,90"
            descricao="
          Parka de tela crochet, couro, renda chantily e sianinha. Punhos de
          elástico."
            composicao="100% poliéster"
          />
          <Description
            title="Calça Blue Marina"
            estilo="description-bottom"
            reference="1056"
            tamanho="P/G"
            valor="249,90"
            descricao="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam tenetur autem sint facere mollitia ipsum voluptatibus id totam voluptas porro eveniet accusantium tempora, assumenda explicabo perferendis blanditiis debitis? Pariatur, cum."
            composicao="100% poliéster"
          />
        </div>
      </CardTwo>

      <CardThree
        image0="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-05.jpg?raw=true"
        description0="Produto 01"
        image1="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-06.jpg?raw=true"
        description1="Produto 02"
        image2="https://github.com/alopsantos/ES-Catalog/blob/master/images/produto-02.jpg?raw=true"
        description2="Produto 03"
      />

      <CardFour
        image0="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-01.jpg?raw=true"
        description0="Produto 01"
        image1="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-02.jpg?raw=true"
        description1="Produto 02"
        image2="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-03.jpg?raw=true"
        description2="Produto 03"
        image3="https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-04.jpg?raw=true"
        description3="Produto 04"
        imagens={[
          {
            foto:
              "https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-01.jpg?raw=true",
          },
          {
            foto:
              "https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-02.jpg?raw=true",
          },
          {
            foto:
              "https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-03.jpg?raw=true",
          },
          {
            foto:
              "https://github.com/alopsantos/ES-Catalog/blob/master/images/foto-03.jpg?raw=true",
          },
        ]}
      />

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
