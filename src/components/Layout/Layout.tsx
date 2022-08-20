import * as React from "react";

import SideBar from "@components/Layout/SideBar";

interface ILayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-layout">
      <SideBar />
      <main className="p-10 min-w-0 h-screen">{children}</main>
    </div>
  );
};

export default Layout;
