import * as React from "react";
import { TableKeyedProps } from "react-table";

export interface ITableHeaderCellProps extends TableKeyedProps {
  children: React.ReactNode | React.ReactNode[];
}

const TableHeaderCell: React.FunctionComponent<ITableHeaderCellProps> = ({ children, ...props }) => {
  return (
    <th {...props} className="px-4 text-center">
      {children}
    </th>
  );
};

export default TableHeaderCell;
