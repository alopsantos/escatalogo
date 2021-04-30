import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  font-weight: 500;
  margin-top: 16px;
  width: 100%;
  height: 50px;
  color: #fff;
  padding: 0;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background: var(--dark-green);
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#6af139")};
  }
`;
