import * as React from "react";

import { MonthSummary } from "@pages/activity/hooks/useMonthSummary";

import MonthCard from "./components/MonthCard";

interface IMonthViewProps {
  data: MonthSummary[];
}

const MonthView: React.FunctionComponent<IMonthViewProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-6 items-center p-4">
      {data.map((monthData) => (
        <MonthCard data={monthData} />
      ))}
    </div>
  );
};

export default MonthView;
