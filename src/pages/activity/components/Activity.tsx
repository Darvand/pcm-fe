import * as React from "react";

import { ActivityProps } from "../types/activity-table.type";
import NumberCircle from "./NumberCircle";
import WeekCardList from "./WeekCardList";
import WeekSelector from "./WeekSelector";

interface IActivityProps {}

const staticData: ActivityProps[] = [...Array(40).keys()].map((_, index) => ({
  id: `${index}`,
  week: 11 + index,
  year: 2022,
  dateFormat: "Mar 14 - Mar 20",
  hoursWorked: 47.5,
  totalToPay: 1183701,
  totalDebt: 69111,
  totalExpenses: 213665,
  utility: 890029,
  status: "Pagado",
}));

const Activity: React.FunctionComponent<IActivityProps> = (props) => {
  return (
    <main>
      <WeekSelector weeks={staticData.map((data) => data.week)} />
      <WeekCardList activity={staticData} />
    </main>
  );
};

export default Activity;
