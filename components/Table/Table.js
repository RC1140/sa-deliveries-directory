// import { forwardRef, useMemo, useRef, useEffect } from "react";
// https://docs.google.com/spreadsheets/d/1z7hcEq3Cg_pOtgSTHnNNDK7evlC3orib_egx7iXvYos/edit?usp=sharing
// https://spreadsheets.google.com/feeds/list/1z7hcEq3Cg_pOtgSTHnNNDK7evlC3orib_egx7iXvYos/1/public/values?alt=json

import {
  useTable,
  useSortBy,
  useFilters,
  useGroupBy,
  useExpanded,
  usePagination,
  useRowSelect,
} from "react-table";
import matchSorter from "match-sorter";
import ReactGA from "react-ga";

import { Pagination } from "../Pagination";
import { StyledTable } from "./StyledTable";

function Table({ columns, data, updateMyData, skipReset, tableFor }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize,
      sortBy,
      groupBy,
      expanded,
      filters,
      selectedRowIds,
    },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
      // We also need to pass this so the page doesn't change
      // when we edit the data.
      autoResetPage: !skipReset,
      autoResetSelectedRows: !skipReset,
      disableMultiSort: true,
      initialState: { pageSize: 20, pageIndex: 0 },
    },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const cleanURL = (url) => {
    const u = url.split("/");
    return u[2].replace("www.", "");
  };

  // Render the UI for your table
  return (
    <>
      <StyledTable>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    align={column.align ? column.align : "left"}
                    width={column.width ? column.width : "auto"}
                  >
                    <div>
                      <span {...column.getSortByToggleProps()}>
                        {column.render("Header")}

                        {column.title ? (
                          <span title={column.title}> ?</span>
                        ) : (
                          ""
                        )}

                        {/* Add a sort direction indicator */}
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "  🔽"
                            : "  🔼"
                          : ""}
                      </span>
                    </div>
                    {/* Render the columns filter UI */}
                    {column.filter ? (
                      <div className="th-filter">{column.render("Filter")}</div>
                    ) : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={`cell ${
                          cell.column.className ? cell.column.className : ""
                        }`}
                        align={cell.column.align ? cell.column.align : "left"}
                      >
                        {cell.isGrouped ? (
                          // If it's a grouped cell, add an expander and row count
                          <>
                            <span {...row.getToggleRowExpandedProps()}>
                              {row.isExpanded ? "👇" : "👉"}
                            </span>{" "}
                            {cell.render("Cell", { editable: false })} (
                            {row.subRows.length})
                          </>
                        ) : cell.isAggregated ? (
                          // If the cell is aggregated, use the Aggregated
                          // renderer for cell
                          cell.render("Aggregated")
                        ) : cell.isPlaceholder ? null : cell.column
                            .displayType === "tick" && cell.value ? (
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="12" cy="12" r="12" />
                            </svg>
                          </span>
                        ) : cell.column.isLink && cell.value ? (
                          <a
                            href={cell.value}
                            target="_blank"
                            rel="nofollow noreferrer"
                            onClick={() => {
                              ReactGA.event({
                                category: tableFor,
                                action: cleanURL(cell.value),
                                label: "Outbound Link",
                              });
                            }}
                          >
                            {cleanURL(cell.value)}
                          </a>
                        ) : (
                          cell.render("Cell")
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
              sortBy,
              groupBy,
              expanded: expanded,
              filters,
              selectedRowIds: selectedRowIds,
            },
            null,
            2
          )}
        </code>
      </pre> */}
      </StyledTable>

      <Pagination>
        <div className="rowspp">
          <small>Rows per page</small>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 20, 50, 100, 200].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>

        <div className="nextprev">
          <button
            look="bare"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            style={{ transform: `scaleX(-1)` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </button>
          <span className="pagecount">{pageIndex + 1}</span>
          <button
            look="bare"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </button>
          <span className="of">&nbsp;&nbsp;of&nbsp;</span>
          <span className="total">{pageOptions.length}</span>
        </div>
      </Pagination>
    </>
  );
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      style={{ padding: `5px` }}
      placeholder="Search"
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
    />
  );
}

const fuzzyTextFilterFn = (rows, id, filterValue) =>
  matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

export { Table };
