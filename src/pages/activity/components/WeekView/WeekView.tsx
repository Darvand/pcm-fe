import { DateTime } from "luxon";
import * as React from "react";

import { WeeklySummary } from "@pages/activity/hooks/useWeeklySummary";
import { ActivityProps } from "@pages/activity/types/activity-table.type";

import WeekCardList from "./components/WeekCardList";
import WeekSelector from "./components/WeekSelector";

interface IWeekViewProps extends React.HTMLAttributes<HTMLDivElement> {
  activity: WeeklySummary[];
  selectedWeekIndex: number;
  setSelectedWeekIndex: (index: number) => void;
}

const WeekView: React.FunctionComponent<IWeekViewProps> = ({
  activity,
  selectedWeekIndex,
  setSelectedWeekIndex,
  className,
}) => {
  return (
    <div className={`flex flex-col h-full min-h-0 ${className}`}>
      <WeekSelector
        dates={activity.map((data) => data.date)}
        selectedWeekIndex={selectedWeekIndex}
        setSelectedWeekIndex={setSelectedWeekIndex}
      />
      <WeekCardList activity={activity} selectedWeekIndex={selectedWeekIndex} />
    </div>
  );
};

export default WeekView;
