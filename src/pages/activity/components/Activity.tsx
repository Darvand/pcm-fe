import { DateTime } from "luxon";
import * as React from "react";

import Switch from "@components/Switch";

import { useMonthSummary } from "../hooks/useMonthSummary";
import { useWeeklySummary } from "../hooks/useWeeklySummary";
import { ExpenseCategory, WeeklyActivity } from "../types/activity-table.type";
import MonthView from "./MonthView/MonthView";
import WeekView from "./WeekView/WeekView";

interface IActivityProps {}

const actualDate = DateTime.now().setLocale("es-CO").minus({ weeks: 20 });

const mockActivity: WeeklyActivity[] = [...Array(40).keys()].map((_, index) => {
  const date = actualDate.plus({ week: index + 1 });
  return {
    id: `${index}`,
    dailyActivity: [...Array(5).keys()].map((_, dayNumber) => {
      const date = actualDate.plus({ week: index + 1, days: dayNumber + 1 });
      return {
        breakTimeInMinutes: 30,
        date,
        template: `template${dayNumber}`,
        startHour: date.plus({ hours: 8 }),
        endHour: date.plus({ hours: 18 }),
        minutesWorked: 600,
      };
    }),
    dailyExpenses: [...Array(5).keys()].map((_, dayNumber) => ({
      date: actualDate.plus({ week: index + 1, days: dayNumber + 1 }),
      category: ExpenseCategory.GAS,
      value: Math.floor(Math.random() * 300000),
    })),
    weeklyDeductions: [
      {
        concept: "Retefuente",
        price: Math.floor(Math.random() * 200000),
      },
    ],
    weeklySettlement: [
      {
        material: "Material 45123",
        minutesPayed: 600 * 5,
        anotherValue: 14500,
        settlement: Math.floor(Math.random() * 1500000),
      },
    ],
    week: date.weekNumber,
    year: date.year,
    status: "Pagado",
  };
});

const viewSwitchValues = [
  { value: "day", label: "Dia" },
  { value: "week", label: "Semana" },
  { value: "month", label: "Mes" },
];

const Activity: React.FunctionComponent<IActivityProps> = (props) => {
  const actualDate = DateTime.now();
  const [viewSelected, setViewSelected] = React.useState<string>("week");
  const [selectedWeekIndex, setSelectedWeekIndex] = React.useState<number>(
    mockActivity.findIndex(
      (activity) =>
        activity.week === actualDate.weekNumber &&
        activity.year === actualDate.year
    )
  );
  const weeklySummary = useWeeklySummary(mockActivity);
  const monthSummary = useMonthSummary(weeklySummary);
  return (
    <div className="h-full flex flex-col items-center">
      <Switch
        values={viewSwitchValues}
        setValueSelected={setViewSelected}
        valueSelected={viewSelected}
      />
      <WeekView
        className={viewSelected === "week" ? "block" : "hidden"}
        activity={weeklySummary}
        selectedWeekIndex={selectedWeekIndex}
        setSelectedWeekIndex={setSelectedWeekIndex}
      />
      {viewSelected === "month" && <MonthView data={monthSummary} />}
    </div>
  );
};

export default Activity;
