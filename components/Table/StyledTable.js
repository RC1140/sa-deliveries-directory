import styled from "styled-components";

const StyledTable = styled.div`
  background: #f6f4f3;
  margin: 0;
  padding: 30px 20px;
  border-top: 1px solid rgba(175, 91, 91, 0.2);
  overflow: scroll;

  @media (min-width: 1024px) {
    padding: 50px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      th {
        font-size: 0.6rem;
        color: rgba(0, 0, 0, 0.5);
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
      }

      tr:last-of-type th {
        border-bottom: 1px solid rgba(175, 91, 91, 0.4);
        padding-bottom: 10px;
      }

      .th-filter {
        margin-top: 5px;
        margin-bottom: 5px;

        input {
          background: rgba(39, 111, 191, 0.1);
          border: none;
          padding: 5px 0;
        }
      }
    }

    tbody {
      tr:first-of-type td {
        padding-top: 10px;
      }

      tr:nth-of-type(even) td {
        background: rgba(0, 0, 0, 0.05);
      }

      td {
        font-size: 0.8rem;
        vertical-align: middle;
        padding: 5px;

        &.title {
          font-weight: 600;
        }

        a {
          color: #6369d1;
          text-decoration: none;
        }

        svg {
          width: 15px;
          height: 15px;
          fill: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;

export { StyledTable };
