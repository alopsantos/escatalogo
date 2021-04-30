import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { Edit } from "react-feather";

import { Container } from "./styles";

const Input: React.FC = () => {
  return (
    <Container>
      <Edit size="20" />
      <input type="text" />
    </Container>
  );
};

export default Input;
