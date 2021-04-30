import React from "react";
import { Form } from "@unform/web";
import {
  FiPackage,
  FiFileText,
  FiTag,
  FiCrop,
  FiDollarSign,
} from "react-icons/fi";
import { ModalOverlay, Container } from "./styles";
import Input from "../Input";
const CadastroCatalogoModal = ({ onClose = () => {} }) => {
  return (
    <ModalOverlay>
      <div className="modal">
        <div className="form">
          <h2>Novo Produto</h2>
          <Form onSubmit={() => {}}>
            <Container>
              <div className="input-group">
                <label className="sr-only">Nome do produto:</label>
                <Input
                  type="text"
                  name="nome"
                  placeholder="Nome do produto"
                  icon={FiPackage}
                />
              </div>
              <div className="input-group">
                <label className="sr-only">Descrição:</label>
                <Input
                  type="text"
                  name="descricao"
                  placeholder="Descrição do produto"
                  icon={FiFileText}
                />
              </div>
              <div className="input-group">
                <label className="sr-only">Composição:</label>
                <Input
                  type="text"
                  name="composicao"
                  placeholder="Composição do produto"
                  icon={FiFileText}
                />
              </div>
              <div className="input-group"></div>
              <div className="input-group">
                <div className="grupos">
                  <div>
                    <label className="sr-only">Referencia:</label>
                    <Input type="text" name="referencia" icon={FiTag} />
                  </div>
                  <div>
                    <label className="sr-only">Tamanhos:</label>
                    <Input
                      type="text"
                      name="tamanhos"
                      placeholder="P/M/G"
                      icon={FiCrop}
                    />
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label className="sr-only">Valor:</label>
                <Input type="text" name="valor" icon={FiDollarSign} />
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
          </Form>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default CadastroCatalogoModal;
