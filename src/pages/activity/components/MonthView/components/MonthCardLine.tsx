import * as React from "react";
import { IconType } from "react-icons/lib";

import { toColCurrency } from "@utils/currency.util";

interface IMonthCardLineProps {
  Icon: IconType;
  label: string;
  value: number;
}

const MonthCardLine: React.FunctionComponent<IMonthCardLineProps> = ({
  Icon,
  label,
  value,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="p-4 bg-secondary-dark rounded-xl text-light-gray">
          <Icon />
        </div>
        <span>{label}</span>
      </div>
      <span className="font-bold">{toColCurrency(value)}</span>
    </div>
  );
};

export default MonthCardLine;
