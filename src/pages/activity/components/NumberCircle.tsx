import * as React from "react";

export interface INumberCircleProps extends React.HTMLAttributes<HTMLElement> {
  number: number;
  active?: boolean;
  size?: number;
}

const NumberCircle: React.FunctionComponent<INumberCircleProps> = ({
  active = false,
  size = 16,
  className = "",
  number,
  onClick,
}) => {
  return (
    <div
      className={`rounded-full text-white w-${size} h-${size} flex justify-center items-center flex-none ${
        active ? "bg-light-blue" : "bg-secondary-dark"
      } ${className}`}
      onClick={onClick}
    >
      <span>{number}</span>
    </div>
  );
};

export default NumberCircle;
