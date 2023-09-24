import React from "react";

function Inputbox({value, onChange, match, clear, wordCount, charCount}) {
  return (
    <div>
      <div className="max-w-xl mx-auto mt-10 rounded-md shadow ">
        <div class="max-w-xl mx-auto bg-white p-6  box-border  rounded-md shadow-lg">
          <label for="message" class="block text-gray-700 font-Jost font-bold mb-2">
            Add some text:
          </label>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            id="message"
            name="message"
            class="w-full h-48 p-2 border rounded-md font-Jost resize-y focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Type your text here..."></textarea>
          <div className="gap-2 mt-2 md:flex">
            <p className="text-base font-medium font-Jost">Word Count: {wordCount}</p>
            <p className="text-base font-medium font-Jost">
              Character Count: {charCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
