import * as React from "react";

interface ICardLineProps {
  label: string;
  value: string;
}

const CardLine: React.FunctionComponent<ICardLineProps> = ({
  label,
  value,
}) => {
  return (
    <div className="flex gap-4 text-light-gray justify-between w-full">
      <span>{label}</span>
      <span className="bg-secondary-dark w-40 text-center rounded-lg">
        {value}
      </span>
    </div>
  );
};

export default CardLine;
