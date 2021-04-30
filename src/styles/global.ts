import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  outline: 0;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

:root {
  --dark-blue: #363f5f;
  --dark-green: #49aa26;
  --dark-green-hover: #3dd705;
  --dark-red: #e92929;
}

html{
  font-size: 93.75%;
}

body{
  font-family: 'Poppins', sans-serif;
}
input, button{
  font-size: 1.0rem;
}
`;
