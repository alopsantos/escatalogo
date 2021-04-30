import React from "react";

import { ModalOverlay, Container } from "./styles";
const CadastroCatalogoModal = ({ onClose = () => {} }) => {
  return (
    <ModalOverlay>
      <div className="modal">
        <div className="form">
          <h2>Cadastro de marca</h2>
          <Container>
            <div className="input-group">
              <label className="sr-only">Nome da marca:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome do produto"
              />
            </div>
            <div className="input-group">
              <label className="sr-only">Instagram:</label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                placeholder="@instagram"
              />
            </div>
            <div className="input-group">
              <label className="sr-only">Endereço:</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                placeholder="Rua e numero"
              />
            </div>
            <div className="input-group">
              <div className="grupos">
                <div>
                  <label className="sr-only">Cep:</label>
                  <input type="text" id="referencia" name="referencia" />
                </div>
                <div>
                  <label className="sr-only">Telefone:</label>
                  <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    placeholder="Ex: (45) 3541-2940"
                  />
                </div>
                <div>
                  <label className="sr-only">Whatsapp:</label>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                  />
                </div>
              </div>
            </div>

            <div className="input-group">
              <label className="sr-only">Logo:</label>
              <input type="text" id="logo" name="logo" placeholder="Link do logo, ex: https://www..." />
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
