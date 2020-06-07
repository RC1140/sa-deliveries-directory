import styled from "styled-components";

const LaunchPad = styled.div`
  display: flex;
  padding: 0 5%;
  justify-content: space-between;
  flex-direction: column;

  * {
    box-sizing: border-box;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    margin-top: 100px;
  }

  a {
    width: 100%;
    flex: 0 1 100%;
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 15px 5%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 200;
    text-decoration: none;
    margin-bottom: 20px;
    transition: all 0.1s ease-in-out;

    @media (min-width: 992px) {
      width: 30%;
      flex: 0 1 30%;
      height: 200px;
      font-size: 1.8rem;
      margin: 0;
    }

    strong {
      font-weight: 400;
    }

    i {
      font-style: normal;
    }

    &#link-alcohol {
      background: rgba(6, 214, 160, 0.4);
      &:hover {
        background: rgba(6, 214, 160, 0.7);
        transition: all 0.2s ease-in-out;
      }
    }

    &#link-coffee {
      background: rgba(239, 71, 111, 0.4);
      &:hover {
        background: rgba(239, 71, 111, 0.7);
        transition: all 0.2s ease-in-out;
      }
    }

    &#link-grocery {
      background: rgba(38, 84, 124, 0.4);
      color: rgba(0, 0, 0, 0.4);
      &:hover {
        background: rgba(38, 84, 124, 0.7);
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

export { LaunchPad };
