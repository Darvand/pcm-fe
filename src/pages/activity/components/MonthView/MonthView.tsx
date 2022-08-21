import * as React from "react";
import { BsEyeFill } from "react-icons/bs";

import IconButton from "@components/IconButton";

import NumberCircle from "../NumberCircle";
import MonthCard from "./components/MonthCard";

interface IMonthViewProps {}

const MonthView: React.FunctionComponent<IMonthViewProps> = (props) => {
  return (
    <div className="flex flex-wrap gap-6 items-center p-4">
      <MonthCard month="Enero" />
      <MonthCard month="Enero" />
      <MonthCard month="Enero" />
      <MonthCard month="Enero" />
      <MonthCard month="Enero" />
      <MonthCard month="Enero" />
      <MonthCard month="Enero" />
      <MonthCard month="Enero" />
      <MonthCard month="Enero" />
    </div>
  );
};

export default MonthView;
