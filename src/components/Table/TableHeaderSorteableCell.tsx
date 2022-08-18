import * as React from "react";
import { IconBaseProps } from "react-icons";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import TableHeaderCell, { ITableHeaderCellProps } from "./TableHeaderCell";

interface ITableHeaderSorteableCellProps extends ITableHeaderCellProps {
  isSorted: boolean;
  isSortedDesc: boolean | undefined;
}

const TableHeaderSorteableCell: React.FunctionComponent<ITableHeaderSorteableCellProps> = ({
  children,
  isSorted,
  isSortedDesc,
  ...props
}) => {
  const iconProps: IconBaseProps = {
    size: 25,
    className: `absolute top-1/4 right-0 ${isSorted ? "text-blue" : "text-white"} hover:text-light-blue`,
  };
  const Icon = isSortedDesc ? IoMdArrowDropup : IoMdArrowDropdown;

  return (
    <TableHeaderCell {...props}>
      <div className="relative text-center w-full px-8 h-12 flex items-center">
        {children}
        <Icon {...iconProps} />
      </div>
    </TableHeaderCell>
  );
};

export default TableHeaderSorteableCell;
