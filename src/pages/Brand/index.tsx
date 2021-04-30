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
import { Link } from "react-router-dom";

import api from "../../services/api";
import Logo from "../../assets/images/logo.svg";
import { Containerheader, Container, Footer } from "./styles";
import Cardstatus from "../../components/CardStatus";
import CadastroProdutoModal from "../../components/Modal/CadastroProdutoModal";

interface IBrand {
  id: number;
  instagram: string;
  loja: ILoja[];
}
interface ILoja {
  nome: string;
  endereco:string;
  cep: string;
  telefone: string;
  whatsapp: string;
}
const Produtos: React.FC = () => {
  const [brand, setBrand] = useState<IBrand[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    carregarCatalogo();
  }, []);

  async function carregarCatalogo() {
    const resulte = await api.get("brand");
    setBrand(resulte.data);
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
          <input type="text" />
          <button>Buscar</button>
        </section>
        <section>
          <h2 className="sr-only">Catalogos</h2>
          <table>
            <thead>
              <tr>
                <th>
                  <Link to="#" title="Adicionar novo endereço" onClick={() => setIsModalVisible(true)}>
                    <FilePlus
                      size="22"
                      color="green"
                    />
                  </Link>
                </th>
                <th>Nome</th>
                <th>Endereços</th>
                <th>Gerenciar</th>
              </tr>
            </thead>

            <tbody>
              {brand.map((marca) => {
                return (
                  <tr>
                    <td key={marca.id}>{marca.id}</td>
                    <td>{marca.instagram}</td>
                    <td>{marca.loja.length}</td>
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