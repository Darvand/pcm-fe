import * as React from "react";
import { IconBaseProps } from "react-icons";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import TableHeaderCell, { ITableHeaderCellProps } from "./TableHeaderCell";

interface ITableHeaderSorteableCellProps extends ITableHeaderCellProps {
  isSorted: boolean;
  isSortedDesc: boolean | undefined;
}

const TableHeaderSorteableCell: React.FunctionComponent<
  ITableHeaderSorteableCellProps
> = ({ children, isSorted, isSortedDesc, ...props }) => {
  const iconProps: IconBaseProps = {
    size: 25,
    className: `self-center ${
      isSorted ? "text-blue" : "text-white"
    } hover:text-light-blue`,
  };
  const Icon = isSortedDesc ? IoMdArrowDropup : IoMdArrowDropdown;

  return (
    <TableHeaderCell {...props}>
      <div className="h-12 grid grid-cols-table-header">
        {children}
        <Icon {...iconProps} />
      </div>
    </TableHeaderCell>
  );
};

export default TableHeaderSorteableCell;
