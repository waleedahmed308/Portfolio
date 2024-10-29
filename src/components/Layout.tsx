import React from "react";
import SideIcon from "./SideIcon";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <div className="bg-[#292C37] flex  text-white w-full relative">
        <SideIcon />
        <div className="w-full">
          <Header />
          {children}
        <Footer className="absolute left-0"/>
        </div>
      </div>
  );
};

export default Layout;
