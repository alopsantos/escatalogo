import React, { useEffect, useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

import api from "../../services/api";
import Logo from "../../assets/images/logo.svg";
import { Containerheader, Container, Footer } from "./styles";

interface ICatalogo {
  id: number;
  nome: string;
  descricao: string;
  itens: string[];
}
const Dashboard: React.FC = () => {
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
        <section>
          <h2 className="sr-only">Catalogos</h2>

          <a href="#" >
            + Novo Catálogo
          </a>
          <table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Produtos</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {catalogo.map((catalogo) => {
                return (
                  <tr>
                    <td key={catalogo.id}>{catalogo.id}</td>
                    <td>{catalogo.nome}</td>
                    <td>{catalogo.descricao.substr(0, 40)}...</td>
                    <td>{catalogo.itens.length}</td>
                    <td>
                      <FaRegEdit size="22" color="blue" />
                    </td>
                    <td>
                      <FaTrashAlt size="22" color="red" />
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

export default Dashboard;