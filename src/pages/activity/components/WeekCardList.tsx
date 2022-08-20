import * as React from "react";

import { ActivityProps } from "../types/activity-table.type";
import WeekCard from "./WeekCard";

interface IWeekCardListProps {
  activity: ActivityProps[];
}

const WeekCardList: React.FunctionComponent<IWeekCardListProps> = ({
  activity,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {activity.map((data) => (
        <WeekCard key={data.id} {...data} />
      ))}
    </div>
  );
};

export default WeekCardList;
