import React from "react";

import { ModalOverlay, Container } from "./styles";
const CadastroCatalogoModal = ({ onClose = () => {} }) => {
  return (
    <ModalOverlay>
      <div className="modal">
        <div className="form">
          <h2>Novo Produto</h2>
          <Container>
            <div className="input-group">
              <label className="sr-only">Nome do produto:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome do produto"
              />
            </div>
            <div className="input-group">
              <label className="sr-only">Descrição:</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                placeholder="Descrição"
              />
            </div>
            <div className="input-group"></div>
            <div className="input-group">
              <div className="grupos">
                <div>
                  <label className="sr-only">Referencia:</label>
                  <input type="text" id="referencia" name="referencia" />
                </div>
                <div>
                  <label className="sr-only">Tamanhos:</label>
                  <input
                    type="text"
                    id="tamanhos"
                    name="tamanhos"
                    placeholder="P/M/G"
                  />
                </div>
                <div>
                  <label className="sr-only">Valor:</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    step="0.01"
                    placeholder="0,00"
                  />
                </div>
              </div>
            </div>

            <div className="input-group">
              <label className="sr-only">Fotos:</label>
              <input type="file" id="capa" name="capa" multiple />
            </div>

            <div className="input-group actions">
              <button onClick={onClose} className="cancelar">
                Cancelar
              </button>
              <button>Salvar</button>
            </div>
          </Container>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default CadastroCatalogoModal;
