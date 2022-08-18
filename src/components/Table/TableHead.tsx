import * as React from "react";

interface ITableHeadProps {
  children: React.ReactElement[];
}

const TableHead: React.FunctionComponent<ITableHeadProps> = ({ children }) => {
  return <thead className="h-14 text-white font-semibold uppercase ">{children}</thead>;
};

export default TableHead;
