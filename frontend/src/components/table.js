import React, { useState, useEffect } from "react";
import { isEmpty, sortBy, remove } from "lodash";
import "./table.css";

const Table = ({
  columnDefs,
  rowData,
  tableClass = "table",
  headersClass,
  rowClick,
  showCount,
}) => {
  const [state, setState] = useState({
    TableData: [],
    sortState: [],
  });

  const { TableData, sortState } = state;
  useEffect(() => {
    if (rowData) {
      setState({ ...state, TableData: rowData });
    }
  }, [rowData]);

  const sort = (field) => {
    if (!field) return;
    let { sortState: newSortState, TableData } = { ...state };

    if (sortState.includes(field)) {
      newSortState = remove(sortState, function (n) {
        return n !== field;
      });
    } else {
      newSortState.push(field);
    }

    const sortedData = sortBy(TableData, newSortState);

    setState({
      TableData: newSortState.length ? sortedData : rowData,
      sortState: newSortState,
    });
  };

  const getHeader = (data, index, count) => {
    return (
      <th
        key={index}
        className={data.hedderClass || " "}
        onClick={(e) => {
          sort(data.field);
        }}
      >
        {`${data.headerName || index}  ${
          sortState.includes(data.field) ? " ^ " : ""
        }`}
      </th>
    );
  };

  const renderRow = (data, celldata) => {
    if (data?.valueGetter) {
      return data.valueGetter(celldata);
    }
    if (data.renderChild) {
      return data.renderChild(celldata);
    }
    if (data.field) {
      return celldata[data.field] || "-";
    }

    if (data.count) {
      return data.count;
    }

    return "-";
  };

  return (
    <table className={`table ${tableClass}`}>
      <tr className={`header ${headersClass || ""}`}>
        {showCount && getHeader({ headerName: "#" }, "#")}
        {!isEmpty(columnDefs) &&
          columnDefs.map((data, index) => getHeader(data, index, showCount))}
      </tr>

      {!isEmpty(TableData) &&
        TableData.map((celldata, index) => (
          <tr
            key={index}
            onClick={() => {
              rowClick(celldata);
            }}
          >
            {showCount && (
              <td key={index} className="count">
                {index + 1}
              </td>
            )}

            {!isEmpty(columnDefs) &&
              columnDefs.map((data, index) => (
                <td key={index} className={`cell ${data.cellClass || ""}`}>
                  {renderRow(data, celldata)}
                </td>
              ))}
          </tr>
        ))}
    </table>
  );
};

export default Table;
