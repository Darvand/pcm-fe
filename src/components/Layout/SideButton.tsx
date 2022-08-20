import * as React from "react";
import { IconType } from "react-icons";

interface ISideButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  Icon: IconType;
}

const SideButton: React.FunctionComponent<ISideButtonProps> = ({
  className,
  label,
  Icon,
}) => {
  return (
    <button
      className={`h-14 w-full px-8 py-4 
        flex justify-start items-center gap-4
        text-dark-gray font-bold
         hover:bg-third-dark hover:cursor-pointer 
        ${className}`}
    >
      <Icon size={25} className="text-light-gray" />
      <span className="">{label}</span>
    </button>
  );
};

export default SideButton;
