import * as React from "react";
import { BsCashCoin } from "react-icons/bs";
import {
  MdAccountBalanceWallet,
  MdAttachMoney,
  MdTrendingDown,
} from "react-icons/md";

import NumberCircle from "../../NumberCircle";
import MonthCardLine from "./MonthCardLine";

interface IMonthCardProps {
  month: string;
}

const MonthCard: React.FunctionComponent<IMonthCardProps> = ({ month }) => {
  return (
    <div className="flex flex-col w-64">
      <span className="w-full text-center text-white text-xl">{month}</span>
      <div
        className={`w-full rounded-xl bg-primary-dark shadow-lg cursor-pointer
        border-2 border-secondary-dark hover:border-light-gray 
        text-light-gray flex flex-col p-4 ${""}`}
      >
        <div className="w-full rounded-xl bg-secondary-dark text-white flex flex-col p-4">
          <div className="flex justify-between">
            <span>Utilidad</span>
            <MdAttachMoney size={20} />
          </div>
          <span className="font-bold text-xl">$4.230.124</span>
        </div>
        <span className="mt-4">Detalle</span>
        <div className="flex flex-col gap-4 w-full text-white">
          <MonthCardLine Icon={BsCashCoin} label="Pagos" value={423412} />
          <MonthCardLine
            Icon={MdAccountBalanceWallet}
            label="Deudas"
            value={423412}
          />
          <MonthCardLine Icon={MdTrendingDown} label="Gastos" value={423412} />
        </div>
        <span className="w-full items-center mt-2">Semanas</span>
        <div className="flex gap-2">
          <NumberCircle number={13} size={12} />
          <NumberCircle number={13} size={12} />
          <NumberCircle number={13} size={12} />
        </div>
      </div>
    </div>
  );
};

export default MonthCard;
