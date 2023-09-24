import React from "react";

function ButtonsGroup({text, onClick}) {
  return (
    <>
      <button
        onClick={onClick}
        className="py-3 px-8 font-Jost font-normal text-base rounded-3xl bg-white hover:bg-primary duration-500 hover:text-white border-lite.grey border-2 border-solid">
        {text}
      </button>
    </>
  );
}

export default ButtonsGroup;
