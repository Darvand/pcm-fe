import * as React from "react";

import { ActivityProps } from "../../../types/activity-table.type";
import WeekCard from "./WeekCard";

interface IWeekCardListProps {
  activity: ActivityProps[];
  selectedWeekIndex: number;
}

const CARD_SIZE_IN_PX = 176 + 16;

const WeekCardList: React.FunctionComponent<IWeekCardListProps> = ({
  activity,
  selectedWeekIndex,
}) => {
  const [moveY, setMoveY] = React.useState(0);
  const listContainerRef = React.useRef<HTMLHeadingElement>(null);
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    setMoveY(moveY + event.deltaY);
  };
  React.useEffect(() => {
    if (listContainerRef) {
      const height = listContainerRef.current
        ? listContainerRef.current.offsetHeight / 2 - CARD_SIZE_IN_PX / 2
        : 0;
      setMoveY(selectedWeekIndex * CARD_SIZE_IN_PX * -1 + height);
    }
  }, [listContainerRef, selectedWeekIndex]);
  return (
    <div
      className="overflow-hidden w-full"
      onWheel={handleScroll}
      ref={listContainerRef}
    >
      <div
        className={`transition ease-in-out duration-300 flex flex-col gap-4`}
        style={{
          transform: `translateY(${moveY}px)`,
        }}
      >
        {activity.map((data, index) => (
          <WeekCard
            key={data.id}
            {...data}
            isSelected={index === selectedWeekIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default WeekCardList;
