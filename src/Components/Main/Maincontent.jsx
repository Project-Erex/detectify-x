import React from "react";

import Sidebar from "./Sidebar";

import MobileHeader from "./MobileHeader";
import Content from "./Content/Content";
function Maincontent() {
  return (
    <div className="flex flex-col w-screen bg-blue-400 md:flex-row">
      <Sidebar />
      <MobileHeader />
      <Content />
    </div>
  );
}

export default Maincontent;
