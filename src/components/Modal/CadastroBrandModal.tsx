import React from "react";
import { Form } from "@unform/web";
import { FiHome, FiImage, FiInstagram, FiMapPin, FiMessageCircle, FiPhoneCall } from "react-icons/fi";
import Input from "../Input";

import { ModalOverlay, Container } from "./styles";
const CadastroCatalogoModal = ({ onClose = () => {} }) => {
  return (
    <ModalOverlay>
      <div className="modal">
        <div className="form">
          <h2>Cadastro de marca</h2>
          <Form onSubmit={() => {}}>
            <Container>
              <div className="input-group">
                <div className="grupos">
                  <div>
                    <label className="sr-only">Nome da marca:</label>
                    <Input type="text" name="nome" icon={FiHome} />
                  </div>
                  <div>
                    <label className="sr-only">Instagram:</label>
                    <Input type="text" name="instagram" icon={FiInstagram} />
                  </div>
                </div>
              </div>
              <div className="input-group">
                <label className="sr-only">Endereço:</label>
                <Input type="text" name="endereco" icon={FiMapPin} />
              </div>
              <div className="input-group">
                <div className="grupos">
                  <div>
                    <label className="sr-only">Cep:</label>
                    <Input type="text" name="cep" icon={FiMapPin} />
                  </div>
                  <div>
                    <label className="sr-only">Telefone:</label>
                    <Input
                      type="text"
                      name="telefone"
                      icon={FiPhoneCall}
                      placeholder="Ex: (45) 3541-2940"
                    />
                  </div>
                </div>
              </div>
              <div className="input-group">
                <label className="sr-only">Whatsapp:</label>
                <Input type="text" name="whatsapp" icon={FiMessageCircle} />
              </div>

              <div className="input-group">
                <label className="sr-only">Logo:</label>
                <Input
                  type="text"
                  name="logo"
                  icon={FiImage}
                  placeholder="Link do logo, ex: https://www..."
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
