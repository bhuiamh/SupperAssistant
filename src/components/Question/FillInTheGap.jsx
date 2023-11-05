import React, { useRef, useState } from "react";
import { FaEllipsisV, FaRegListAlt, FaUnderline } from "react-icons/fa";

const FillInTheGap = () => {
  const editorRef = useRef(null);
  const [underlinedWords, setUnderlinedWords] = useState(["Word"]);
  const [inputText, setInputText] = useState("");

  const handleUnderline = () => {
    document.execCommand("underline", false, null);
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      setUnderlinedWords((prevWords) => [...prevWords, selectedText]);
      const regex = new RegExp(`\\b(${underlinedWords.join("|")})\\b`, "gi");

      const replaceUnderlinedWord = inputText.replace(regex, "_____");

      inputText(replaceUnderlinedWord);
    }
  };

  const handleInput = (e) => {
    const text = e.target.textContent;

    const regex = new RegExp(`\\b(${underlinedWords.join("|")})\\b`, "gi");

    const replaceUnderlinedWord = text.replace(regex, "_____");

    setInputText(replaceUnderlinedWord);
  };

  return (
    <div className="mx-16 my-7 min-h-[40vh] border-[#008060] border-4">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl gap-1 flex items-center text-[#008060]">
            <FaRegListAlt /> Question Type 2
          </h1>
          <button>
            <FaEllipsisV />
          </button>
        </div>
        <div className="flex justify-center">
          <div>
            <h1 className="text-xl font-semibold my-1">Reserved Word</h1>

            <div className="w-[600px] min-h-16 border-2 border-[#008060] border-solid flex m-1 gap-1">
              <div className="flex-grow">
                {/* Fill in the word show in here as button */}
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
          <div className="form-control">
            <div className="flex">
              <h1 className="font-bold mr-3 mb-2"> Fill in the gap text</h1>
              <button className="text-[#008060]" onClick={handleUnderline}>
                <FaUnderline />
              </button>
            </div>

            <div
              ref={editorRef}
              contentEditable
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                minHeight: "200px",
              }}
              placeholder={inputText || "Type your text here..."}
              onInput={handleInput}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillInTheGap;
