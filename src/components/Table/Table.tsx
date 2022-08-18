import * as React from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Column, Row, usePagination, useSortBy, useTable } from "react-table";

import Dropdown from "@components/Dropdown";
import IconButton from "@components/IconButton";
import {
  TableBody,
  TableBodyRow,
  TableCell,
  TableHead,
  TableHeaderRow,
  TableHeaderSorteableCell,
} from "@components/Table";
import { ITableBodyRowProps } from "@components/Table/TableBodyRow";

export interface ITableProps<T extends {}> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
}

export default function Table<T extends {}>(props: ITableProps<T>) {
  const data = React.useMemo<T[]>(() => props.data, []);
  const columns = React.useMemo<Column<T>[]>(() => props.columns, []);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useSortBy,
    usePagination
  );

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;
  return (
    <>
      <table
        {...getTableProps()}
        className="border-separate border-spacing-y-1 text-sm"
      >
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <TableHeaderSorteableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isSorted={column.isSorted}
                    isSortedDesc={column.isSortedDesc}
                  >
                    {column.render("Header")}
                  </TableHeaderSorteableCell>
                );
              })}
            </TableHeaderRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableBodyRow
                {...row.getRowProps()}
                onClick={() =>
                  props.onRowClick && props.onRowClick(row.original)
                }
              >
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableBodyRow>
            );
          })}
        </TableBody>
      </table>
      <div className="flex flex-col gap-4 py-4 w-full">
        <div className="flex gap-4 text-white">
          <span>Mostrar</span>
          <Dropdown
            value={pageSize}
            options={[10, 20, 30, 40, 50, 60]}
            setValue={setPageSize}
          />
          <span>registros</span>
          <p className="text-gray">
            Mostrando {pageIndex + 1}-{pageSize * (pageIndex + 1)} de{" "}
            {pageOptions.length * pageSize} registros
          </p>
        </div>
        <div className="flex gap-6 self-center">
          <IconButton
            Icon={IoMdArrowDropleft}
            iconPosition="left"
            label="Anterior"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          />
          <IconButton
            Icon={IoMdArrowDropright}
            iconPosition="right"
            label="Siguiente"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          />
        </div>
      </div>
    </>
  );
}
