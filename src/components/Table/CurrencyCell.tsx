import * as React from "react";
import { CellProps } from "react-table";

const CurrencyCell: React.FunctionComponent<CellProps<any, any>> = ({ value }) => {
  return <span>$ {Intl.NumberFormat("es-CO").format(value)}</span>;
};

export default CurrencyCell;
