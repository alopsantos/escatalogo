import styled from "styled-components";

export const Containerheader = styled.header`
  background-color: #ccc;
  padding: 2rem 0 8rem;

  display: flex;
  justify-content: center;
`;

export const Container = styled.section`
  width: min(90vw, 800px);
  margin: auto;

  section {
    display: block;
    width: 100%;
    overflow-x: auto;
    margin-top: 20px;

    &#menucard {
      margin-top: -4rem;
    }

    @media (min-width: 800px) {
      &#menucard {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
    }

    form{
      display: grid;
      grid-row: 1fr;

      div{
        width: 50%;
      }
    }
  }

  h2 {
    font-size: 1.2rem;
    color: #ef1c8f;

    &.sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: --1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  }
  a {
    color: #49aa26;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #3dd705;
    }
  }
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: #969cb3;
    font-size: 1rem;

    svg {
      cursor: pointer;
    }

    thead tr th:first-child,
    tbody tr td:first-child {
      border-radius: 0.25rem 0 0 0.25rem;
    }
    thead tr th:last-child,
    tbody tr td:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
    }
    thead th {
      background: #fff;
      font-weight: normal;

      padding: 1rem 2rem;
      text-align: center;
    }
    tbody tr {
      opacity: 0.7;
    }
    tbody tr:hover {
      opacity: 1;
    }
    tbody td {
      background: #fff;
      padding: 1rem 2rem;

      a {
        display: inherit;
        padding-left: 10px;

        svg {
          cursor: pointer;

          &:hover {
            fill: #ccc;
          }
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 4rem 0 2rem;
  color: var(--dark-blue);
  opacity: 0.6;
  bottom: 0;
  font-size: 0.6rem;
`;
