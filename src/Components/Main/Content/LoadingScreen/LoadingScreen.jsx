import React from "react";

function LoadingScreen() {
  return (
    <>
      <div className="max-w-xl mx-auto mt-10 rounded-md shadow ">
        <div class="max-w-xl mx-auto bg-white p-6  box-border  rounded-md shadow-lg">
          <div className="flex items-center justify-center w-full p-2 resize-y h-52 font-Jos">
            <div className="flex flex-col ">
              <div
                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
              <div className="flex-col -ml-5">
                <p>Detecting...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
