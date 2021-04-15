import styled from "styled-components";

export const Contracapacss = styled.section`
  img {
    width: 100%;
    opacity: 0.4;
  }
  p{
    position: absolute;
    z-index: 999;
    top: 25%;
    width: 400px;
    text-align:center;
    left:180px;

    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    letter-spacing: 3px;

    strong{
      display: block;
      /* margin: 0 0 30px 0; */
      font-size: 70px;
      font-family: 'Dancing Script', cursive;
      letter-spacing: 0;
    }
  }
  @media print{
    img{
      width:100%;
    }
  }
`;
