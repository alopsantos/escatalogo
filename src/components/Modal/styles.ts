import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  div.modal {
    background: #f0f2f5;
    padding: 2.4rem;
    width: 90%;
    max-width: 560px;
    z-index: 1;
    position: relative;
  }
  div.form {
    max-width: 560px;
    h2 {
      margin-top: 0;
    }
  }
`;

export const Container = styled.div`

  div.input-group {
    margin-top: 0.8rem;
  }
  
  div.grupos{
    display: flex;
      flex-direction: row;
      gap: 12px;
  }
  div.input-group small {
    opacity: 0.4;
  }
  div.input-group.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div.input-group.actions .button,
  div.input-group.actions button {
    width: 48%;
  }

  button {
    width: 100%;
    height: 50px;
    border: none;
    color: #fff;
    background: var(--dark-green);
    padding: 0;
    border-radius: 0.25rem;
    cursor: pointer;

    &.cancelar{
      background: var(--dark-red);
    }
  }
`;
