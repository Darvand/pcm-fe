import * as React from "react";
import { TableBodyProps } from "react-table";

interface ITableBodyProps extends TableBodyProps {
  children: React.ReactNode | React.ReactNode[];
}

const TableBody: React.FunctionComponent<ITableBodyProps> = ({ children, ...props }) => {
  return (
    <tbody {...props} className="text-white font-light">
      {children}
    </tbody>
  );
};

export default TableBody;
