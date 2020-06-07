import styled from "styled-components";

const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(var(--text-white), 0.5);
  background: #e5e5e5;
  border-bottom: 1px solid rgba(175, 91, 91, 0.2);
  padding: 5px 30px 5px;
  align-items: center;
  position: relative;
  z-index: 100;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    padding: 10px 50px;
  }

  .rowspp {
    small {
      @media (min-width: 992px) {
        margin-right: 20px;
        position: relative;
        top: -1px;
      }
    }

    select {
      color: rgba(var(--text-white), 1);
      padding: 5px;
      border: none;
      appearance: none;
      background: transparent;
      position: relative;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="black"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg>');
      background-repeat: no-repeat;
      background-size: 15px 15px;
      padding-right: 15px;
      background-position: right center;

      .theme-dark & {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="white"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg>');
      }
    }
  }

  .nextprev {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.7rem;

    button {
      margin: 0;
      padding: 5px;
      padding: 0;
      border: none;
      background: transparent;

      &:first-of-type {
        margin-right: 5px;
      }

      &:last-of-type {
        margin-left: 5px;
      }

      svg {
        width: 20px;
        height: 20px;
        margin: 0;
        fill: rgba(0, 0, 0, 0.5);
      }
    }

    input,
    span.pagecount {
      width: 20px;
      height: 18px;
      background: transparent;
      border: none;
      border-left: 1px solid rgba(var(--text-white), 0.2);
      border-right: 1px solid rgba(var(--text-white), 0.2);
      text-align: center;
      letter-spacing: 0;
      color: rgba(var(--text-white), 1);
      padding: 0 5px;
      line-height: 18px;
    }

    svg {
      path {
        stroke-width: 1px;
        stroke: white;
      }
    }

    .of,
    .total {
      position: relative;
      top: -1px;
    }
  }
`;

export { Pagination };
