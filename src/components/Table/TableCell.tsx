import * as React from "react";
import { TableCellProps } from "react-table";

interface ITableCellProps extends TableCellProps {
  children: React.ReactNode | React.ReactNode[];
}

const TableCell: React.FunctionComponent<ITableCellProps> = ({ children, ...props }) => {
  return (
    <td {...props} className="text-center">
      {children}
    </td>
  );
};

export default TableCell;
