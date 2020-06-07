import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 50px;
  padding-left: 3%;
  padding-right: 3%;

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

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export { Header };
