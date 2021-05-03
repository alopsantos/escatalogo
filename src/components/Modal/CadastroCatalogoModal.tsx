import React from "react";
import { Form } from "@unform/web";
import {
  FiPackage,
  FiFileText,
  FiTag,
  FiCrop,
  FiDollarSign,
  FiClipboard,
  FiAperture,
  FiImage,
} from "react-icons/fi";
import Input from "../Input";

import { ModalOverlay, Container } from "./styles";
const CadastroCatalogoModal = ({ onClose = () => {} }) => {
  return (
    <ModalOverlay>
      <div className="modal">
        <div className="form">
          <h2>Novo Catálogo</h2>
          <Form onSubmit={() => {}}>
            <Container>
              <div className="input-group">
                <label className="sr-only">Nome da coleção:</label>
                <Input
                  type="text"
                  name="nome"
                  icon={FiClipboard}
                  placeholder="Nome da coleção"
                />
              </div>
              <div className="input-group">
                <label className="sr-only">Descrição:</label>
                <Input
                  type="text"
                  name="descricao"
                  icon={FiFileText}
                  placeholder="Descrição da coleção"
                />
              </div>
              <div className="input-group">
                <label className="sr-only">Cor:</label>
                <Input
                  type="text"
                  name="cor"
                  icon={FiAperture}
                />
                <small className="help">
                  Usar codigos hexadecimais, ex: #EF1C8F.
                </small>
              </div>
              <div className="input-group">
                <label className="sr-only">Capa:</label>
                <Input
                  type="file"
                  name="imagemcapa"
                  icon={FiImage}
                />
              </div>
              <div className="input-group">
                <label className="sr-only">Contra capa:</label>
                <Input
                  type="file"
                  name="imagemcontracapa"
                  icon={FiImage}
                />
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
