import * as React from "react";

import { toColCurrency } from "@utils/currency.util";

import { ActivityProps } from "../../../types/activity-table.type";
import CardLine from "../../CardLine";
import NumberCircle from "../../NumberCircle";

interface IWeekCardProps extends ActivityProps {
  isSelected?: boolean;
}

const WeekCard: React.FunctionComponent<IWeekCardProps> = (props) => {
  const { date, hoursWorked, utility, totalToPay, totalExpenses, totalDebt } =
    props;
  const dateFormat = `${date.startOf("week").toFormat("LLL dd")} - ${date
    .endOf("week")
    .toFormat("LLL dd")}`;
  return (
    <div
      className={`
      w-full h-44 flex items-center rounded-xl justify-around py-6 shadow-lg
    bg-primary-dark border-2 border-l-[20px]
      hover:border-light-blue cursor-pointer
      ${props.isSelected ? "border-light-blue" : "border-secondary-dark"}
    `}
    >
      <div className="flex items-center flex-col gap-3">
        <NumberCircle
          number={date.weekNumber}
          className={`${
            props.isSelected ? "bg-light-blue" : "bg-secondary-dark"
          }`}
        />
        <span
          className={` text-sm ${
            props.isSelected ? "text-light-blue" : "text-light-gray"
          }`}
        >
          {dateFormat}
        </span>
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
