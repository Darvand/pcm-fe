import * as React from "react";

import { toColCurrency } from "@utils/currency.util";

import { ActivityProps } from "../types/activity-table.type";
import CardLine from "./CardLine";
import NumberCircle from "./NumberCircle";

const WeekCard: React.FunctionComponent<ActivityProps> = (props) => {
  const {
    week,
    dateFormat,
    hoursWorked,
    utility,
    totalToPay,
    totalExpenses,
    totalDebt,
  } = props;
  return (
    <div
      className="w-full h-44 flex items-center rounded-xl justify-around py-6 shadow-lg
  bg-primary-dark border-2 border-secondary-dark border-l-[20px]
  "
    >
      <div className="flex items-center flex-col gap-3">
        <NumberCircle number={week} />
        <span className="text-light-gray text-sm">{dateFormat}</span>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <CardLine label="Horas trabajadas" value={`${hoursWorked}`} />
        <CardLine
          label="Total a pagar"
          value={`${toColCurrency(totalToPay)}`}
        />
        <CardLine label="Total deuda" value={`${toColCurrency(totalDebt)}`} />
        <CardLine
          label="Total gastos"
          value={`${toColCurrency(totalExpenses)}`}
        />
      </div>
      <div className="rounded-xl h-20 w-36 bg-secondary-dark text-white flex flex-col items-center justify-center">
        <span>Utilidad</span>
        <span className="text-lg font-bold">{toColCurrency(utility)}</span>
      </div>
    </div>
  );
};

export default WeekCard;
