import { Duration } from "luxon";
import * as React from "react";
import {
  MdAccountBalanceWallet,
  MdAlarmOn,
  MdAttachMoney,
  MdPayments,
  MdTrendingDown,
  MdTrendingUp,
} from "react-icons/md";

import { MonthSummary } from "@pages/activity/hooks/useMonthSummary";
import { toColCurrency } from "@utils/currency.util";

import NumberCircle from "../../NumberCircle";
import MonthCardLine from "./MonthCardLine";

interface IMonthCardProps {
  data: MonthSummary;
}

const MonthCard: React.FunctionComponent<IMonthCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-72">
      <span className="w-full text-center text-white text-xl">
        {`${data.month.year} - ${data.month.monthLong}`}
      </span>
      <div
        className={`group w-full rounded-xl bg-primary-dark shadow-lg cursor-pointer
        border-2 border-secondary-dark hover:border-call
        text-light-gray flex flex-col p-4`}
      >
        <div className="w-full rounded-xl  flex flex-col p-4 bg-secondary-dark text-white group-hover:bg-call">
          <div className="flex justify-between">
            <span>Utilidad</span>
            <div
              className={`rounded-full flex justify-center items-center p-1 bg-light-gray text-secondary-dark group-hover:bg-white group-hover:text-call`}
            >
              {data.utility < 0 ? (
                <MdTrendingDown size={20} />
              ) : (
                <MdTrendingUp size={20} />
              )}
            </div>
          </div>
          <span className="font-bold text-xl">
            {toColCurrency(data.utility)}
          </span>
        </div>
        <span className="mt-4">Detalle</span>
        <div className="flex flex-col gap-4 w-full text-white">
          <MonthCardLine
            Icon={MdPayments}
            label="Pagos"
            value={data.totalSettlement}
            isCurrency
          />
          <MonthCardLine
            Icon={MdAccountBalanceWallet}
            label="Deducciones"
            value={data.totalDeductions}
            isCurrency
          />
          <MonthCardLine
            Icon={MdAttachMoney}
            label="Gastos"
            value={data.totalExpenses}
            isCurrency
          />
          <MonthCardLine
            Icon={MdAlarmOn}
            label="Horas"
            value={Duration.fromObject({
              minutes: data.minutesWorked,
            }).toFormat("h")}
          />
        </div>
        <span className="w-full items-center mt-2">Semanas</span>
        <div className="flex gap-2">
          {data.weeks.map((week) => (
            <NumberCircle
              number={week.number}
              size={10}
              className="hover:border-call hover:border font-bold"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthCard;
