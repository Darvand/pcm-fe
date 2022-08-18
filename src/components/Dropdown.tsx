import * as React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface IDropdownProps {
  options: any[];
  value: any;
  setValue: (value: any) => void;
}

const Dropdown = ({ value, options, setValue }: IDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="relative ring-2 ring-light-blue rounded-lg text-light-blue w-16 pl-3 hover:cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <button>
        <span className="leading-relaxed">{value}</span>
        <IoMdArrowDropdown size={25} className="absolute top-0 right-0" />
      </button>
      {isOpen && (
        <ul className="bg-blue absolute top-full left-0 w-16 text-white mt-1 rounded-lg flex flex-col gap-1 py-2">
          {options.map((option) => (
            <li className="text-left hover:bg-secondary-dark px-2" onClick={() => setValue(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
