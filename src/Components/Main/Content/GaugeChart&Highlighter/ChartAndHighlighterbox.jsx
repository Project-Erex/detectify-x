import React from "react";

import GaugeChart from "react-gauge-chart";

import Highlighter from "react-highlight-words";

function ChartAndHighlighterbox({clear, score, matchTxt, value}) {
  return (
    <>
      <div className="max-w-xl mx-auto mt-10 rounded-md shadow ">
        <div class="max-w-xl mx-auto bg-white p-6  box-border  rounded-md shadow-lg">
          <div className="flex justify-end pb-2">
            <button
              onClick={clear}
              className="py-3 px-8 font-Jost font-normal text-base text-white rounded-3xl bg-primary hover:bg-grey duration-500 hover:text-white border-lite.grey border-2 border-solid">
              clear
            </button>
          </div>
          <div className="h-auto p-2 border rounded-md resize-y md:w-full font-Jost focus:outline-none focus:ring focus:border-blue-300">
            <GaugeChart
              id="gauge-chart6"
              animate={true}
              nrOfLevels={15}
              // style={{width:500}}
              percent={Math.round(score) / 10}
              textColor={"red"}
              needleColor="#345243"
            />
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={matchTxt.map((item) => item) || [value]}
              autoEscape={true}
              textToHighlight={value}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartAndHighlighterbox;
