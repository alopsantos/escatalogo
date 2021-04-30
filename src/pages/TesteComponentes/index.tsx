import React, { useRef } from "react";
import { FiMail } from "react-icons/fi";
import Input from "../../components/Input";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { Container } from "./styles";

const Testecomponentes: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <Form ref={formRef} onSubmit={() => {}}>
        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input name="email" icon={FiMail} placeholder="Email" />
      </Form>
    </Container>
  );
};

export default Testecomponentes;
