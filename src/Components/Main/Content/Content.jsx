import {useState, useEffect} from "react";

import ContentHeder from "./ContentHeader/ContentHeder";

import ButtonsGroup from "./Buttons/ButtonsGroup";

import Inputbox from "./InputBox/Inputbox";

import InputSubBtn from "./Buttons/Button";

import LoadingScreen from "./LoadingScreen/LoadingScreen";

import ChartAndHighlighterbox from "./GaugeChart&Highlighter/ChartAndHighlighterbox";

import Ads from "./Ads/Ads";

import {aiPlusHuman, chatGpt, GPT4, human, bard} from "./InputBox/dummy";
import { Outlet } from "react-router-dom";

function Content({isDiff,isHome}) {
  const [value, setValue] = useState("");
  const [matchTxt, setTextMatch] = useState([]);
  const [disabled, setIsDisabled] = useState(true);
  const [score, setScore] = useState(0.1);
  const [isLoading, setIsLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const detectAIKeywordsAndPercentage = (text) => {
    setIsLoading(true);
    const aiPatterns = [
      /[\d\w\s]*, an AI created this text[\d\w\s]*/gi,
      /Generated[\d\w\s]*/gi,
      /This text was generated automatically[\d\w\s]*/gi,
      /Tailord[\d\w\s]*/gi,

      // Add more patterns here
    ];

    let totalTextLength = text.length;
    let matchedTextLength = 0;

    const detectedKeywords = [];

    for (const pattern of aiPatterns) {
      const matches = text.match(pattern);
      if (matches) {
        matches.forEach((match) => {
          detectedKeywords.push(match);
          matchedTextLength += match.length;
        });
      }
    }
    // Calculate the matching score as a percentage of matched text length
    const matchingScore = (matchedTextLength / totalTextLength) * 10;
    setScore(matchingScore);
    if (detectedKeywords.length > 0) {
      setTextMatch(detectedKeywords);
    } else {
      setTextMatch([""]);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const clear = () => {
    setValue("");
    setTextMatch([]);
  };

  const handleSubmit = () => {
    if (value.length < 30) {
      alert("Not enough content to detect");
    } else {
      detectAIKeywordsAndPercentage(value);
    }
  };

  useEffect(() => {
    if (value == "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [value]);

  useEffect(() => {
    // array of words
    const words = value.split(" ");

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);

    // update char count (including whitespaces)
    setCharCount(value.length);
  }, [value]);

  return (
    <>
      <div className="md:w-[80%] flex flex-col-reverse  md:flex-row  right-0  z-[-1] absolute w-full ">

        {isDiff ? <div className="md:w-[80%] w-full py-4 md:py-6 md:px-6  px-4 flex-col  bg-white">
          {/*========================================================
                       <======== Header ========>
           ========================================================*/}
          <div>
            <ContentHeder />
          </div>

          {/* ======================================================= */}

          {/*========================================================
                 <======== Buttons Groups ========>
           ========================================================*/}
          <div className="flex flex-wrap gap-2 pt-10">
            {matchTxt.length < 1 && (
              <>
                <ButtonsGroup onClick={() => setValue(chatGpt)} text="ChatGPT" />
                <ButtonsGroup onClick={() => setValue(GPT4)} text="GPT4" />
                <ButtonsGroup onClick={() => setValue(human)} text="Human" />
                <ButtonsGroup onClick={() => setValue(bard)} text="AI+Human" />
                <ButtonsGroup onClick={() => setValue(aiPlusHuman)} text="Bard" />
              </>
            )}
          </div>
          {/* ======================================================= */}

          {/*========================================================
                 <======== Loading Screen ========>
           ========================================================*/}

          {isLoading ? (
            <>
              <LoadingScreen />
            </>
          ) : (
            <>
              {matchTxt.length > 0 ? (
                <div>
                  <ChartAndHighlighterbox
                    matchTxt={matchTxt}
                    value={value}
                    score={score}
                    clear={clear}
                  />
                </div>
              ) : (
                <>
                  <Inputbox
                    match={matchTxt}
                    value={value}
                    onChange={(text) => setValue(text) && {handleChange}}
                    wordCount={wordCount}
                    charCount={charCount}
                  />
                  <div className="flex justify-end mt-4 xl:mr-44 ">
                    <InputSubBtn disabled={disabled} onSubmit={handleSubmit} />
                  </div>
                </>
              )}
            </>
          )}

          {/* ======================================================= */}
        </div>:<Outlet/>}
        

        <div className="md:w-[20%] w-full h-[100vh] pt-20 md:pt-10 flex">
          <Ads />
        </div>
      </div>
    </>
  );
}

export default Content;
