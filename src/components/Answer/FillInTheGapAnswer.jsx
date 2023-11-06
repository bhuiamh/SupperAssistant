import React, { useRef, useState, useEffect } from "react";
import { FaRegListAlt, FaUnderline } from "react-icons/fa";

const FillInTheGapAnswer = ({ gap }) => {
  const editorRef = useRef(null);

  const [underlinedWords, setUnderlinedWords] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const regex = new RegExp(`\\b(${underlinedWords.join("|")})\\b`, "gi");
    const replaceUnderlinedWord = inputText.replace(regex, "_____");
    setInputText(replaceUnderlinedWord);
  }, [underlinedWords, inputText]);

  useEffect(() => {
    if (gap?.text && gap?.underlineWords) {
      const text = gap?.text;
      const words = gap?.underlineWords;
      setInputText(text);
      setUnderlinedWords(words);
    }
  }, [gap]);

  return (
    <div className="mx-16 my-7 min-h-[40vh] border-2 border-[#008060] group">
      {gap?.text ? (
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl gap-1 flex items-center text-[#008060]">
              <FaRegListAlt /> Question Type 2
            </h1>
          </div>

          <div className="flex justify-center">
            <div>
              <h1 className="text-xl font-semibold my-1">Reserved Words</h1>

              <div className="w-[600px] min-h-16 border-2 border-[#008060] border-solid flex m-1 gap-1">
                <div className="flex-grow">
                  {underlinedWords?.map((word) => (
                    <button key={word} className="btn normal-case m-1">
                      {word}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="m-2">
            <h1 className="mx-60 my-6 font-mono font-semibold text-xl">
              {inputText}
            </h1>
          </div>
        </div>
      ) : (
        <div>
          <h1>Data is loading please wait.....</h1>
        </div>
      )}
    </div>
  );
};

export default FillInTheGapAnswer;
