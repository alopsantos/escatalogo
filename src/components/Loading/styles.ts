import styled, { keyframes } from 'styled-components';

const Frameanimacao = keyframes`
  from {
      transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Loadingcss = styled.div`
  border: 8px solid rgba(0, 0, 0, .1);
  border-left-color: #EF1C8F;
  height: 60px;
  width: 60px;
  border-radius: 50%;

  animation: ${Frameanimacao} 1s linear infinite;
  margin: 20px auto;
`;