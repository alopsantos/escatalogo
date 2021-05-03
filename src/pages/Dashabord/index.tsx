import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Edit,
  Package,
  Clipboard,
  Award,
  FilePlus,
  Trash2
} from "react-feather";

import api from "../../services/api";
import Logo from "../../assets/images/logo.svg";
import { Containerheader, Container, Footer } from "./styles";
import Cardstatus from "../../components/CardStatus";
import CadastroCatalogoModal from "../../components/Modal/CadastroCatalogoModal";
import { Form } from "@unform/web";
import Input from "../../components/Input";
import { FiPrinter, FiSearch } from "react-icons/fi";

interface ICatalogo {
  id: number;
  nome: string;
  descricao: string;
  itens: string[];
}
const Dashboard: React.FC = () => {
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
          <Cardstatus pagina="/produtos" titulo="Produtos" icon={Package} />
          <Cardstatus pagina="/marca" titulo="Marca" icon={Award} />
        </section>
        <section>
        <Form onSubmit={() => {}}>
            <div>
              <Input
                type="text"
                name="search"
                icon={FiSearch}
                placeholder="Buscar um catalogo"
              />
            </div>
          </Form>
        </section>
        <section>
          <h2 className="sr-only">Catalogos</h2>

          <table>
            <thead>
              <tr>
                <th>
                  <FilePlus
                    size="22"
                    color="green"
                    onClick={() => setIsModalVisible(true)}
                  />
                </th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Produtos</th>
                <th>Gerenciar</th>
              </tr>
            </thead>

            <tbody>
              {catalogo.map((catalogo) => {
                return (
                  <tr key={catalogo.id}>
                    <td>{catalogo.id}</td>
                    <td>{catalogo.nome}</td>
                    <td>{catalogo.descricao.substr(0, 40)}...</td>
                    <td width="50">{catalogo.itens.length}</td>
                    <td>
                      <Link to={"/catalogo/"+ catalogo.id} title="Imprimir catálogo.">
                        <FiPrinter size="28" color="#969cb3" />
                      </Link>
                      <Link to="#" title="Editar produtos do catálogo">
                        <Package size="28" color="#969cb3" />
                      </Link>
                      <Link to="#" title="Editar catálogo.">
                        <Edit size="28" color="#969cb3" />
                      </Link>
                      <Link to="#" title="Excluir catálogo">
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
        <CadastroCatalogoModal onClose={() => setIsModalVisible(false)} />
      ) : null}
      <Footer>
        <h3>by: Anderson Lopes</h3>
      </Footer>
    </>
  );
};

export default Dashboard;
