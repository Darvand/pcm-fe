import { DateTime } from "luxon";
import * as React from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

import DisabledNumberCircle from "./DisabledNumberCircle";
import NumberCircle from "./NumberCircle";

interface IWeekSelectorProps {
  weeks: number[];
}

const CIRCLE_SIZE = 16 + 64;
const TRANSLATE_IN_PX = (16 + 64) * 5;
const WEEKS_OF_SLACK = 5;

const WeekSelector: React.FunctionComponent<IWeekSelectorProps> = ({
  weeks,
}) => {
  const actualDate = DateTime.now();
  const weekContainerRef = React.useRef<HTMLHeadingElement>(null);
  const [selectedWeek, setSelectedWeek] = React.useState<number>(
    actualDate.weekNumber
  );
  const [moveX, setMoveX] = React.useState(0);
  const monthSize = React.useMemo(
    () =>
      weeks.reduce<Record<string, number>>((accum, week) => {
        const month = DateTime.fromObject({ weekYear: 2022, weekNumber: week });
        return {
          ...accum,
          [month.monthLong]: accum[month.monthLong]
            ? accum[month.monthLong] + 1
            : 1,
        };
      }, {}),
    [weeks]
  );
  React.useEffect(() => {
    if (weekContainerRef) {
      const width = weekContainerRef.current
        ? weekContainerRef.current.offsetWidth / 2
        : 0;
      setMoveX((selectedWeek - weeks[0]) * CIRCLE_SIZE * -1 + width);
    }
  }, [weekContainerRef, selectedWeek]);
  const canLeft = moveX + TRANSLATE_IN_PX <= 0;
  const canRight =
    moveX - TRANSLATE_IN_PX > (weeks.length - 1) * TRANSLATE_IN_PX * -1;
  return (
    <div
      className="grid grid-rows-2 gap-2 py-4"
      style={{ gridTemplateColumns: "50px 1fr 50px" }}
    >
      <IoMdArrowDropleftCircle
        size={50}
        className={`cursor-pointer row-start-2 min-w-0 ${
          canLeft ? "text-light-blue" : "text-secondary-dark"
        }`}
        onClick={() => {
          if (canLeft) {
            setMoveX(moveX + TRANSLATE_IN_PX);
          }
        }}
      />
      <div className="overflow-hidden w-full row-span-2 col-start-2 min-w-0 min-h-0">
        <div
          className={`transition ease-in-out duration-300 grid grid-rows-2`}
          style={{
            transform: `translateX(${moveX}px)`,
            gridTemplateColumns: `repeat(${weeks.length}, 1fr)`,
          }}
          ref={weekContainerRef}
        >
          {Object.keys(monthSize).map((monthName) => {
            return (
              <div
                key={monthName}
                className={`text-lg justify-self-center self-center ${
                  actualDate.monthLong === monthName
                    ? "text-light-blue"
                    : "text-white"
                }`}
                style={{
                  gridColumn: `span ${monthSize[monthName]} / span ${monthSize[monthName]}`,
                }}
              >
                {monthName}
              </div>
            );
          })}
          {weeks.map((week) => (
            <NumberCircle
              key={week}
              onClick={() => setSelectedWeek(week)}
              number={week}
              className={`hover:bg-light-blue cursor-pointer self-center justify-self-center min-w-0 mx-2 ${
                selectedWeek === week && "bg-light-blue"
              }`}
            />
          ))}
        </div>
      </div>
      <IoMdArrowDroprightCircle
        size={50}
        className={`cursor-pointer row-start-2 col-start-3 min-w-0 ${
          canRight ? "text-light-blue" : "text-secondary-dark"
        }`}
        onClick={() => {
          if (canRight) {
            setMoveX(moveX - TRANSLATE_IN_PX);
          }
        }}
      />
    </div>
  );
};

export default WeekSelector;
