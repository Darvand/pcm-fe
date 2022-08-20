import { DateTime } from "luxon";
import * as React from "react";

import { ActivityProps } from "@pages/activity/types/activity-table.type";

import WeekCardList from "./components/WeekCardList";
import WeekSelector from "./components/WeekSelector";

interface IWeekViewProps {
  activity: ActivityProps[];
}

const WeekView: React.FunctionComponent<IWeekViewProps> = ({ activity }) => {
  const actualDate = DateTime.now();
  const [selectedWeekIndex, setSelectedWeekIndex] = React.useState<number>(
    activity.findIndex(
      (activity) =>
        activity.date.startOf("week").toISODate() ===
        actualDate.startOf("week").toISODate()
    )
  );
  return (
    <div className="flex flex-col h-full min-h-0">
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
