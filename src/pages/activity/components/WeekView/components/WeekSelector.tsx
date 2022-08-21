import { DateTime } from "luxon";
import * as React from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

import DisabledNumberCircle from "../../DisabledNumberCircle";
import NumberCircle from "../../NumberCircle";

interface IWeekSelectorProps {
  dates: DateTime[];
  selectedWeekIndex: number;
  setSelectedWeekIndex: (index: number) => void;
}

const CIRCLE_SIZE = 16 + 64;
const TRANSLATE_IN_PX = (16 + 64) * 5;
const WEEKS_OF_SLACK = 5;

const WeekSelector: React.FunctionComponent<IWeekSelectorProps> = ({
  dates,
  selectedWeekIndex,
  setSelectedWeekIndex,
}) => {
  const weekContainerRef = React.useRef<HTMLHeadingElement>(null);
  const [moveX, setMoveX] = React.useState(0);
  const monthSize = React.useMemo(
    () =>
      dates.reduce<Record<string, number>>((accum, date) => {
        return {
          ...accum,
          [date.monthLong]: accum[date.monthLong]
            ? accum[date.monthLong] + 1
            : 1,
        };
      }, {}),
    [dates]
  );
  React.useEffect(() => {
    if (weekContainerRef) {
      const width = weekContainerRef.current
        ? weekContainerRef.current.offsetWidth / 2
        : 0;
      setMoveX(selectedWeekIndex * CIRCLE_SIZE * -1 + width);
    }
  }, [weekContainerRef, selectedWeekIndex]);
  const canLeft = moveX + TRANSLATE_IN_PX <= 0;
  const canRight =
    moveX - TRANSLATE_IN_PX > dates.length * TRANSLATE_IN_PX * -1;
  return (
    <div
      className="grid grid-rows-2 gap-2 py-4"
      style={{ gridTemplateColumns: "50px 1fr 50px" }}
    >
      <IoMdArrowDropleftCircle
        size={50}
        className={`cursor-pointer row-start-2 ${
          canLeft ? "text-light-blue" : "text-secondary-dark"
        }`}
        onClick={() => {
          if (canLeft) {
            setMoveX(moveX + TRANSLATE_IN_PX);
          }
        }}
      />
      <div className="overflow-hidden w-full row-span-2 col-start-2">
        <div
          className={`transition ease-in-out duration-300 grid grid-rows-2`}
          style={{
            transform: `translateX(${moveX}px)`,
            gridTemplateColumns: `repeat(${dates.length}, 1fr)`,
          }}
          ref={weekContainerRef}
        >
          {Object.keys(monthSize).map((monthName) => {
            return (
              <div
                key={monthName}
                className={`text-xl justify-self-center self-center w-full text-center border-l border-light-blue ${
                  dates[selectedWeekIndex].monthLong === monthName
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
          {dates.map((date, index) => (
            <NumberCircle
              key={date.toString()}
              onClick={() => setSelectedWeekIndex(index)}
              number={date.weekNumber}
              className="hover:border-dark-gray border border-secondary-dark cursor-pointer self-center justify-self-center mx-2"
              active={selectedWeekIndex === index}
            />
          ))}
        </div>
      </div>
      <IoMdArrowDroprightCircle
        size={50}
        className={`cursor-pointer row-start-2 col-start-3 ${
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
