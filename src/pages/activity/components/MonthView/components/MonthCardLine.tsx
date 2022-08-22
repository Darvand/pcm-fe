import * as React from "react";
import { IconType } from "react-icons/lib";

import { toColCurrency } from "@utils/currency.util";

interface IMonthCardLineProps {
  Icon: IconType;
  label: string;
  value: string | number;
  isCurrency?: boolean;
}

const MonthCardLine: React.FunctionComponent<IMonthCardLineProps> = ({
  isCurrency = false,
  Icon,
  label,
  value,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="p-3 bg-secondary-dark rounded-xl text-light-gray">
          <Icon />
        </div>
        <span className="text-light-gray">{label}</span>
      </div>
      <span className="font-bold">
        {isCurrency ? toColCurrency(+value) : value}
      </span>
    </div>
  );
};

export default MonthCardLine;
