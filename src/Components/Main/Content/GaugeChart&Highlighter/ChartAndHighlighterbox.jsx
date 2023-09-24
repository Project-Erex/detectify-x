import React from "react";

import GaugeChart from "react-gauge-chart";

import Highlighter from "react-highlight-words";

function ChartAndHighlighterbox({clear, score, matchTxt, value}) {
  return (
    <>
      <div className="max-w-xl mx-auto mt-10 rounded-md shadow ">
        <div class="max-w-xl mx-auto bg-white p-6  box-border  rounded-md shadow-lg">
          <div className="flex items-center justify-between pb-2">
            <p>
              Probability of AI{" "}
              <samp className="text-red-600">{Math.floor(score) / 1.0}%</samp>
            </p>
            <button
              onClick={clear}
              className="py-3 px-8 font-Jost font-normal text-base text-white rounded-3xl bg-primary hover:bg-grey duration-500 hover:text-white border-lite.grey border-2 border-solid">
              Clear
            </button>
          </div>
          <div className="h-auto p-2 border rounded-md resize-y md:w-full font-Jost focus:outline-none focus:ring focus:border-blue-300">
            <GaugeChart
              id="gauge-chart6"
              animate={true}
              nrOfLevels={15}
              // style={{width:500}}
              percent={Math.floor(score) / 100}
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
