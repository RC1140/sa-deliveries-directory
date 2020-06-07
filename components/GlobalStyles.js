import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;

    @media (min-width: 767px) {
      font-size:16px;
    }

    @media (min-width: 1024px) {
      font-size:18px;
    }
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing:border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  #link-home {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(6, 214, 160, 1);

    svg {
      width: 20px;
      height: 20px;
      fill: rgba(255,255,255,1);
    }
  }
`;

export { GlobalStyle };
