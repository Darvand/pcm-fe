import * as React from "react";
import { IconType } from "react-icons";

interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
  iconPosition?: "left" | "right";
  label?: string;
  iconSize?: number;
}

const IconButton: React.FunctionComponent<IIconButtonProps> = ({
  Icon,
  iconPosition = "left",
  label = "",
  iconSize = 25,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`flex gap-2 text-light-blue ${className} ${
        rest.disabled && "text-blue"
      }`}
    >
      {iconPosition === "left" && <Icon size={iconSize} />}
      <span className="leading-relaxed">{label}</span>
      {iconPosition === "right" && <Icon size={iconSize} />}
    </button>
  );
};

export default IconButton;
