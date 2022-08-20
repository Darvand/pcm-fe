import { DateTime } from "luxon";
import * as React from "react";

import { ActivityProps } from "../types/activity-table.type";
import WeekView from "./WeekView/WeekView";

interface IActivityProps {}

const actualDate = DateTime.now().setLocale("es-CO").minus({ weeks: 20 });

const staticData: ActivityProps[] = [...Array(40).keys()].map((_, index) => ({
  id: `${index}`,
  date: actualDate.plus({ week: index + 1 }),
  hoursWorked: 47.5,
  totalToPay: 1183701,
  totalDebt: 69111,
  totalExpenses: 213665,
  utility: 890029,
  status: "Pagado",
}));

const Activity: React.FunctionComponent<IActivityProps> = (props) => {
  return (
    <div className="h-full">
      <WeekView activity={staticData} />
    </div>
  );
};

export default Activity;
