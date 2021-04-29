import React, { useEffect, useState } from "react";

import api from "../../services/api";

interface ICatalogo {
  id: number;
  nome: string;
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
      {catalogo.map((item) => {
        <ul>
          <li>{item.id}</li>
          <li>{item.nome}</li>
        </ul>;
      })}
    </>
  )
}

export default Dashboard;
