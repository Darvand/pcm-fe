import { DateTime } from "luxon";
import * as React from "react";

import Switch from "@components/Switch";

import { ActivityProps } from "../types/activity-table.type";
import MonthView from "./MonthView/MonthView";
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

const viewSwitchValues = [
  { value: "day", label: "Dia" },
  { value: "week", label: "Semana" },
  { value: "month", label: "Mes" },
];

const Activity: React.FunctionComponent<IActivityProps> = (props) => {
  const actualDate = DateTime.now();
  const [viewSelected, setViewSelected] = React.useState<string>("week");
  const [selectedWeekIndex, setSelectedWeekIndex] = React.useState<number>(
    staticData.findIndex(
      (activity) =>
        activity.date.startOf("week").toISODate() ===
        actualDate.startOf("week").toISODate()
    )
  );
  console.log(selectedWeekIndex);
  return (
    <div className="h-full flex flex-col items-center">
      <Switch
        values={viewSwitchValues}
        setValueSelected={setViewSelected}
        valueSelected={viewSelected}
      />
      <WeekView
        className={viewSelected === "week" ? "block" : "hidden"}
        activity={staticData}
        selectedWeekIndex={selectedWeekIndex}
        setSelectedWeekIndex={setSelectedWeekIndex}
      />
      {viewSelected === "month" && <MonthView />}
    </div>
  );
};

export default Activity;
