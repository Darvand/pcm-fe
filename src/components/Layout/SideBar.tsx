import * as React from "react";
import { IoIosCar } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";

import SideButton from "@components/Layout/SideButton";

interface ISideBarProps {}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  return (
    <nav>
      <div className="w-[250px] h-screen bg-primary-dark shadow-clean-cut fixed">
        <div className="flex justify-center items-center w-full py-8 gap-4 text-light-gray">
          <IoIosCar size={50} />
          <span className="text-5xl font-extrabold">PCM</span>
        </div>
        <div>
          <SideButton
            label="Tablero"
            onClick={() => console.log("log")}
            Icon={MdSpaceDashboard}
          />
          <SideButton
            label="Tablero"
            onClick={() => console.log("log")}
            Icon={MdSpaceDashboard}
          />
          <SideButton
            label="Tablero"
            onClick={() => console.log("log")}
            Icon={MdSpaceDashboard}
          />
          <SideButton
            label="Tablero"
            onClick={() => console.log("log")}
            Icon={MdSpaceDashboard}
          />
          <SideButton
            label="Tablero"
            onClick={() => console.log("log")}
            Icon={MdSpaceDashboard}
          />
          <SideButton
            label="Tablero"
            onClick={() => console.log("log")}
            Icon={MdSpaceDashboard}
          />
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
