import * as React from "react";
import { IconType } from "react-icons";

interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
  iconPosition: "left" | "right";
  label: string;
}

const IconButton: React.FunctionComponent<IIconButtonProps> = ({ Icon, iconPosition, label, className, ...rest }) => {
  return (
    <button {...rest} className={`flex gap-2 text-light-blue ${rest.disabled && "text-blue"}`}>
      {iconPosition === "left" && <Icon size={25} />}
      <span className="leading-relaxed">{label}</span>
      {iconPosition === "right" && <Icon size={25} />}
    </button>
  );
};

export default IconButton;
