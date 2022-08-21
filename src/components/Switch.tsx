import * as React from "react";

interface ISwitchProps {
  values: { value: string; label: string }[];
  valueSelected: string;
  setValueSelected: (value: string) => void;
}

const Switch: React.FunctionComponent<ISwitchProps> = ({
  values,
  valueSelected,
  setValueSelected,
}) => {
  const handleViewSelection = (event: any) =>
    setValueSelected(event.target.name);
  return (
    <div className="flex gap-2 text-light-gray rounded-xl border border-secondary-dark bg-primary-dark w-96 px-4 py-2 justify-around">
      {values.map(({ value, label }) => (
        <button
          key={value}
          className={`hover:text-white px-4 py-2 rounded-xl w-full ${
            valueSelected === value && "bg-light-blue font-bold text-white"
          }`}
          name={value}
          onClick={handleViewSelection}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Switch;
