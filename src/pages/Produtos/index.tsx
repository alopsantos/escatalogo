import React, { useEffect, useState } from "react";
import {
  MinusCircle,
  Edit,
  Package,
  Clipboard,
  Award,
  FilePlus,
  Trash2,
} from "react-feather";
import { Form } from "@unform/web";
import { FiSearch } from "react-icons/fi";

import { Link } from "react-router-dom";

import api from "../../services/api";
import Logo from "../../assets/images/logo.svg";
import { Containerheader, Container, Footer } from "./styles";
import Cardstatus from "../../components/CardStatus";
import CadastroProdutoModal from "../../components/Modal/CadastroProdutoModal";
import Input from "../../components/Input";
import Button from "../../components/Button";

interface ICatalogo {
  id: number;
  nome: string;
  descricao: string;
  itens: string[];
}
const Produtos: React.FC = () => {
  const [catalogo, setCatalogo] = useState<ICatalogo[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          <Form onSubmit={() => {}}>
            <Input
              type="text"
              name="email"
              icon={FiSearch}
              placeholder="Buscar um produto"
            />

            <Button type="submit">Buscar</Button>
          </Form>
        </section>
        <section>
          <h2 className="sr-only">Catalogos</h2>

          <Link to="/">+ Novo Produto</Link>
          <table>
            <thead>
              <tr>
                <th>
                  <Link
                    to="#"
                    title="Adicionar novo produto"
                    onClick={() => setIsModalVisible(true)}
                  >
                    <FilePlus size="22" color="green" />
                  </Link>
                </th>
                <th>Nome</th>
                <th>Valor</th>
                <th>Grade</th>
                <th>Referencia</th>
                <th>Gerenciar</th>
              </tr>
            </thead>

            <tbody>
              {catalogo.map((catalogo) => {
                return (
                  <tr>
                    <td key={catalogo.id}>{catalogo.id}</td>
                    <td>Blusa Marisa Vermelho Poa</td>
                    <td>{catalogo.itens.length}</td>
                    <td>P/M/G</td>
                    <td>12494</td>
                    <td>
                      <Link to="#" title="Editar cadastro do produto">
                        <Edit size="28" color="#969cb3" />
                      </Link>
                      <Link to="#" title="Excluir cadastro do produto">
                        <Trash2 size="28" color="#969cb3" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </Container>

      {isModalVisible ? (
        <CadastroProdutoModal onClose={() => setIsModalVisible(false)} />
      ) : null}
      <Footer>
        <h3>by: Anderson Lopes</h3>
      </Footer>
    </>
  );
};

export default Produtos;
