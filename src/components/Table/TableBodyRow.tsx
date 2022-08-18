import * as React from "react";
import { TableRowProps } from "react-table";

export interface ITableBodyRowProps extends TableRowProps {
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
}

const TableBodyRow = ({ children, onClick, ...props }: ITableBodyRowProps) => {
  return (
    <tr
      {...props}
      onClick={onClick}
      className="h-12 bg-secondary-dark hover:bg-blue hover:cursor-pointer"
    >
      {children}
    </tr>
  );
};

export default TableBodyRow;
