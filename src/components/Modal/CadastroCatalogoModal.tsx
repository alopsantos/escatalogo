import React from "react";

import { ModalOverlay, Container } from "./styles";
const CadastroCatalogoModal = ({ onClose = () => {} }) => {
  return (
    <ModalOverlay>
      <div className="modal">
        <div className="form">
          <h2>Novo Catálogo</h2>
          <Container>
            <div className="input-group">
              <label className="sr-only">Nome da coleção:</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Nome da coleção"
              />
            </div>
            <div className="input-group">
              <label className="sr-only">Descrição:</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
              />
            </div>
            <div className="input-group">
              <label className="sr-only">Cor:</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Cor"
              />
              <small className="help">
                Usar codigos hexadecimais, ex: #EF1C8F.
              </small>
            </div>
            <div className="input-group">
              <label className="sr-only">Capa:</label>
              <input
                type="file"
                id="capa"
                name="capa"
              />
            </div>
            <div className="input-group">
              <label className="sr-only">Contra capa:</label>
              <input
                type="file"
                id="contracapa"
                name="contracapa"
              />
            </div>

            <div className="input-group actions">
              <button onClick={onClose} className="cancelar">Cancelar</button>
              <button>Salvar</button>
            </div>
          </Container>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default CadastroCatalogoModal;