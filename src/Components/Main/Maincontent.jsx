<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> mithun

import Sidebar from "./Sidebar";

import MobileHeader from "./MobileHeader";
import Content from "./Content/Content";
<<<<<<< HEAD
function Maincontent() {
  return (
    <div className="flex flex-col w-screen bg-blue-400 md:flex-row">
      <Sidebar />
      <MobileHeader />
      <Content />
=======
import { Outlet } from "react-router-dom";
function Maincontent() {

  const [isDiff,setIsDiff] = useState(true)
  const [isHome,setIsHome] = useState(false)
  return (
    <div className="flex flex-col w-screen bg-blue-400 md:flex-row">
      <Sidebar setIsDiff={setIsDiff} setIsHome={setIsHome}/>
      <MobileHeader setIsDiff={setIsDiff} setIsHome={setIsHome}/>
      <Content isDiff={isDiff} isHome={isHome}/>
   
>>>>>>> mithun
    </div>
  );
}

export default Maincontent;
