import {useState} from "react";

import {CgMenuRightAlt} from "react-icons/cg";

import {VscTools} from "react-icons/vsc";

import {TbListSearch} from "react-icons/tb";

import {RxCross2} from "react-icons/rx";

<<<<<<< HEAD
import Counter from "./../../assets/Images/count.png";

import MainLogo from "./../../assets/Images/DetectifyX.png";
function MobileHeader() {
  const [IsOpen, setIsOpen] = useState();
=======
import {HiOutlineDocumentSearch} from "react-icons/hi";

import MainLogo from "./../../assets/Images/DetectifyX.png";
import { Link } from "react-router-dom";
function MobileHeader({setIsDiff,setIsHome}) {
  const [IsOpen, setIsOpen] = useState();
  const handleClick = ()=>{
    setIsDiff(false)
    setIsHome(false)
    setIsOpen(!IsOpen)
  }
  const handleHome = ()=>{
    setIsHome(true)
    setIsDiff(true)
    setIsOpen(!IsOpen)
  }
>>>>>>> mithun
  return (
    <>
      <div className="bg-white  fixed top-0 w-screen py-8 md:py-0 flex z-[1] justify-between shadow-md items-center px-4 md:hidden h-[10%]">
        <img className="w-40 " src={MainLogo} alt="" />
        <div onClick={() => setIsOpen(!IsOpen)}>
          {IsOpen ? <RxCross2 size={30} /> : <CgMenuRightAlt size={30} />}
        </div>
      </div>

      <div
<<<<<<< HEAD
        className={` bg-white md:hidden fixed   duration-500 ease-in-out flex h-[100%] w-full ${
=======
        className={` bg-white md:hidden fixed duration-500 ease-in-out flex h-[100%] w-full ${
>>>>>>> mithun
          IsOpen ? "top-10" : "top-[-100%]"
        }  flex-col justify-start items-start px-6 pt-12 text-center font-Jost text-brown `}>
        {/* ============================================== */}
        <div className="flex flex-col items-center justify-center w-full h-20 gap-2 ">
          <div className="flex gap-1">
            <VscTools size={30} />
            <h2 className="text-2xl font-medium font-Jost text-brown">Our Tools</h2>
          </div>
          <div className="h-1 w-36 bg-primary"></div>
        </div>
        {/* ============================================== */}

<<<<<<< HEAD
        <div className="flex items-center justify-center w-full gap-2 py-2 duration-300 bg-gray-300 border-l-8 border-r-8 border-white border-solid cursor-pointer hover:bg-gray-200 hover:border-primary ">
=======
        <div className="flex items-center justify-center w-full gap-2 py-2 duration-300 bg-gray-300 border-l-8 border-r-8 border-white border-solid cursor-pointer hover:bg-gray-200 hover:border-primary" onClick={handleHome}>
>>>>>>> mithun
          <div>
            <TbListSearch size={30} />
          </div>
          <div> AI Content Detector</div>
        </div>
        {/* ============================================== */}
<<<<<<< HEAD

        <div className="flex items-center justify-center w-full gap-2 py-2 mt-2 duration-300 bg-gray-300 border-l-8 border-r-8 border-white border-solid cursor-pointer hover:bg-gray-200 hover:border-primary ">
          <div className="-ml-3">
            <img className="w-6 " src={Counter} alt="Counter" />
          </div>
          <div> Character counter</div>
        </div>

=======
        <Link className="flex items-center justify-center w-full gap-2 py-2 mt-2 duration-300 bg-gray-300 border-l-8 border-r-8 border-white border-solid cursor-pointer hover:bg-gray-200 hover:border-primary" to={`/diffchecker`} onClick={handleClick}>
          <div className="-ml-[52px]">
           <HiOutlineDocumentSearch size={30}/>
          </div>
          <div> Diff Checker</div>
        </Link>
>>>>>>> mithun
        {/* ============================================== */}
      </div>
    </>
  );
}

export default MobileHeader;
