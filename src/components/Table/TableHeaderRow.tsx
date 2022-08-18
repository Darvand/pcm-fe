import * as React from "react";
import { TableHeaderProps, UseTableHeaderGroupProps } from "react-table";
import { ITableHeaderCellProps } from "./TableHeaderCell";

interface ITableHeaderRowProps extends TableHeaderProps {
  children: React.ReactElement<ITableHeaderCellProps>[];
}

const TableHeaderRow: React.FunctionComponent<ITableHeaderRowProps> = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>;
};

export default TableHeaderRow;
