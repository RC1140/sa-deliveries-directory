import styled, { css } from "styled-components";

const Status = styled.div`
  height: 30px;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
  width: 100%;
  left: 0;
  right: 0;
  line-height: 1;

  @media (min-width: 1024px) {
    font-size:.6rem;
  }

  ${(props) =>
    props.state === "loading" &&
    css`
      background: rgba(38, 84, 124, 0.4);
      z-index: 100;
      position: relative;
    `}


  ${(props) =>
    props.state === "info" &&
    css`
      background: rgba(6, 214, 160, 0.4);
    `}

  ${(props) =>
    props.state === "error" &&
    css`
      background: rgba(239, 71, 111, 0.4);
    `}
`;

export { Status };
