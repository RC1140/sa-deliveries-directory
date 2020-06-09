import styled from "styled-components";

const Footer = styled.footer`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 30px 5%;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  p {
    max-width: 500px;
    text-align: right;
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.5);

    &:first-of-type {
      margin-bottom: 5px;
    }
  }

  a {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
    text-transform: uppercase;

    &:last-of-type {
      text-decoration: none;
    }
  }
`;

export { Footer };
