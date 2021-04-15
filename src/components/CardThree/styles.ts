import styled from "styled-components";

export const Cardthreecss = styled.section`
  display: flex;
  padding: 0 0 0 10px;

  article {
    display: flex;
    padding: 20px 0 0 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    margin: 40px 0 0 16px;
    width: 368px;
  }
  .item-2 {
    margin-top: 27px;
  }
  .item-3 {
    margin-left: 20px;
    margin-bottom: 48px;
    height: 1002px;
    width: 51%;
  }

  @media print{
    height: 1002px;
    width: 51%;
  }
`;
