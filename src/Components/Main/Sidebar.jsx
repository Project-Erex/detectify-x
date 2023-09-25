import React from "react";

import MainLogo from "./../../assets/Images/DetectifyX.png";

import {VscTools} from "react-icons/vsc";

import {TbListSearch} from "react-icons/tb";

<<<<<<< HEAD
import counterLogo from "./../../assets/Images/count.png";

function Sidebar() {
=======
import {HiOutlineDocumentSearch} from "react-icons/hi";
import { Link } from "react-router-dom";

// import mainContent from "../DiffChecker/mainContent";

function Sidebar({setIsDiff,setIsHome}) {
  const handleClick = ()=>{
    setIsDiff(false)
    setIsHome(false)
  }
  const handleHome = ()=>{
    setIsHome(true)
    setIsDiff(true)
  }
>>>>>>> mithun
  return (
    <>
      <div className=" hidden md:block fixed  shadow-md border-2 border-r-1 border-l-0  border-t-0   border-solid border-[#E9EDF7] md:h-screen md:w-[20%]">
        <div className="h-[15vh] flex justify-center  items-center border-b-2  border-solid border-[#E9EDF7]  bg-white">
          <img className="md:w-52" src={MainLogo} alt="" />
        </div>
        <div className="h-[85vh] bg-white">
          {/* =================================================== 
                          <===== Our Tools =====>
              =================================================== */}

          <div className="flex items-center justify-center w-full h-20 gap-2 ">
            <VscTools size={30} />
            <h2 className="text-2xl font-semibold font-Jost text-brown">Our Tools</h2>
          </div>

          {/* =================================================== */}

          {/* =================================================== 
                          <===== SideBar Items =====>
              =================================================== */}
          {/* Item-1 */}
          <div className="flex flex-col gap-1">
<<<<<<< HEAD
=======
          <Link to={`/`} onClick={handleHome}>

>>>>>>> mithun
            <div className="flex w-full bg-gray-200 border-r-8 border-solid border-primary ">
              <div className="w-[30%] flex justify-center items-center h-20">
                <TbListSearch size={30} />
              </div>
              <div className="w-[70%] flex  items-center ">
                <h2 className="text-xl font-medium cursor-pointer font-Jost text-brown">
                  Ai Content Detector
                </h2>
              </div>
            </div>
<<<<<<< HEAD
            {/* =================================================== */}
            {/* Item-2 */}

            <div className="flex w-full duration-300 border-r-8 border-white border-solid hover:bg-gray-200 hover:border-primary ">
              <div className="w-[30%] flex justify-center items-center h-20">
                <img className="w-6" src={counterLogo} alt="logo" />
              </div>
              <div className="w-[70%] flex  items-center ">
                <h2 className="text-xl font-medium cursor-pointer font-Jost text-brown">
                  Character counter
                </h2>
              </div>
            </div>
=======
            </Link>
            {/* =================================================== */}
            {/* Item-2 */}

            <Link to={`/diffchecker`} onClick={handleClick}>
            <div className="flex w-full duration-300 border-r-8 border-white border-solid hover:bg-gray-200 hover:border-primary ">
              <div className="w-[30%] flex justify-center items-center h-20">
                {/* <img className="w-6" src={counterLogo} alt="logo" /> */}
                <HiOutlineDocumentSearch size={30}/>
              </div>
              <div className="w-[70%] flex  items-center ">
                <h2 className="text-xl font-medium cursor-pointer font-Jost text-brown">
                Diff Checker
                </h2>
              </div>
            </div>
              </Link>
>>>>>>> mithun
          </div>
          {/* =================================================== */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
