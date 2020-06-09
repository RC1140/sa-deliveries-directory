import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 50px;
  padding-left: 3%;
  padding-right: 3%;

  * {
    outline: none;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  h1 {
    font-weight: 100;
    margin: 0;
    line-height: 1;
  }

  h2 {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
    font-size: 0.7rem;
    margin: 20px 0 0;
  }

  a,
  button {
    color: rgba(0, 200, 200, 1);
    background: none;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
  }
`;

export { Header };
