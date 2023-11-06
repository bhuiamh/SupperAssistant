import React, { useRef, useState, useEffect } from "react";
import { FaRegListAlt, FaUnderline } from "react-icons/fa";

const FillInTheGapAnswer = () => {
  const editorRef = useRef(null);

  const [underlinedWords, setUnderlinedWords] = useState([
    "Akhlak",
    "Word",
    "apple",
    "Banana",
    "love",
  ]);
  const [inputText, setInputText] = useState(
    "Hello akhlak, You need to fill up the form with the right word. Banana and apple are traditional foods. Do you love this ?"
  );

  useEffect(() => {
    const regex = new RegExp(`\\b(${underlinedWords.join("|")})\\b`, "gi");
    const replaceUnderlinedWord = inputText.replace(regex, "_____");
    setInputText(replaceUnderlinedWord);
  }, [underlinedWords, inputText]);

  return (
    <div className="mx-16 my-7 min-h-[40vh] border-4 border-[#008060] group">
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
    </div>
  );
};

export default FillInTheGapAnswer;
