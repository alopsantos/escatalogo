import React, { useEffect, useState } from "react";
import {
  MinusCircle,
  Edit,
  Package,
  Clipboard,
  Award
} from "react-feather";

import api from "../../services/api";
import Logo from "../../assets/images/logo.svg";
import { Containerheader, Container, Footer } from "./styles";
import Cardstatus from "../../components/CardStatus";
import { Link } from "react-router-dom";

interface ICatalogo {
  id: number;
  nome: string;
  descricao: string;
  itens: string[];
}
const Produtos: React.FC = () => {
  const [catalogo, setCatalogo] = useState<ICatalogo[]>([]);

  useEffect(() => {
    carregarCatalogo();
  }, []);

  async function carregarCatalogo() {
    const resulte = await api.get("catalogo");
    setCatalogo(resulte.data);
  }

  return (
    <>
      <Containerheader>
        <img src={Logo} width="110" alt="Logo Aline Mezzari Brand" />
      </Containerheader>
      <Container>
      <section id="menucard">
          <Cardstatus pagina="/" titulo="Catalogo" icon={Clipboard} />
          <Cardstatus pagina="produtos" titulo="Produtos" icon={Package} />
          <Cardstatus pagina="marca" titulo="Marca" icon={Award} />
        </section>
        <section>
          <input type="text"/>
          <button>Buscar</button>
        </section>
        <section>
          <h2 className="sr-only">Catalogos</h2>

          <Link to="/">
            + Novo Produto
          </Link>
          <table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Referencia</th>
                <th>Nome</th>
                <th>Valor</th>
                <th>Grade</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {catalogo.map((catalogo) => {
                return (
                  <tr>
                    <td key={catalogo.id}>{catalogo.id}</td>
                    <td>{catalogo.id}</td>
                    <td>{catalogo.nome}</td>
                    <td>{catalogo.itens.length}</td>
                    <td>{catalogo.itens.length}</td>
                    <td>
                      <Edit size="22" color="blue" />
                    </td>
                    <td>
                      <MinusCircle size="22" color="red" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </Container>
      <Footer>
        <h3>by: Anderson Lopes</h3>
      </Footer>
    </>
  );
};

export default Produtos;
