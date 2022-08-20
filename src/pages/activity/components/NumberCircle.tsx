import * as React from "react";

export interface INumberCircleProps extends React.HTMLAttributes<HTMLElement> {
  number: number;
}

const NumberCircle: React.FunctionComponent<INumberCircleProps> = ({
  number,
  className,
  onClick,
}) => {
  return (
    <div
      className={`rounded-full bg-secondary-dark text-white w-16 h-16 flex justify-center items-center flex-none ${className}`}
      onClick={onClick}
    >
      <span>{number}</span>
    </div>
  );
};

export default NumberCircle;
