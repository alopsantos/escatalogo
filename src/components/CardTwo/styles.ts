import styled from "styled-components";

export const Cardtwocss = styled.section`
  article {
    font-family: "Poppins", sans-serif;
    
    display: flex;
    
    h1 {
      color: orange;
      font-size: 25px;
    }
    
    strong {
      color: orange;
      font-size: 20px;
      display: block;
      margin-top: 10px;
    }
    
    p {
      font-weight: 400;
    }

    b {
      display: block;
      font-weight: bold;
      margin: 10px 0;
    }

    span {
      font-weight: 400;
    }
  }

  img {
    height: 296mm;
    width: 50%;
  }
  div.description-two {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 30px;
    margin-right: 10px;
    width: 300px;
  }
`;
