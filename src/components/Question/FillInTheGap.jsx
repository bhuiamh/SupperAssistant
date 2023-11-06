import React, { useEffect, useRef, useState } from "react";
import { FaEllipsisV, FaRegListAlt, FaUnderline } from "react-icons/fa";

const FillInTheGap = () => {
  const [addAGap, setAddAGap] = useState(false);

  const handleAddGap = () => {
    setAddAGap(true);
  };

  const editorRef = useRef(null);
  const [underlinedWords, setUnderlinedWords] = useState([]);
  const [realText, setRealText] = useState("");
  const [inputText, setInputText] = useState("");

  const handleUnderline = () => {
    document.execCommand("underline", false, null);
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      const isExist = underlinedWords?.includes(selectedText);
      if (isExist) {
        const others = underlinedWords?.filter((w) => w !== selectedText);
        setUnderlinedWords(others);
        return;
      }
      setUnderlinedWords((prevWords) => [...prevWords, selectedText]);
      handleInput({ target: { textContent: `${inputText}` } });
    }
  };

  const detectRegX = (text) => {
    const regex =
      underlinedWords?.length &&
      new RegExp(`\\b(${underlinedWords.join("|")})\\b`, "gi");

    const replaceUnderlinedWord = underlinedWords?.length
      ? text.replace(regex, "_____")
      : text;

    setInputText(replaceUnderlinedWord);
  };

  const handleInput = (e) => {
    const text = e.target.textContent;
    setRealText(text);
    detectRegX(text);
  };
  console.log("i==>", inputText);

  useEffect(() => {
    detectRegX(realText);
  }, [underlinedWords, inputText]);

  return (
    <div className="mx-16 my-7 min-h-[40vh] border-2 border-[#008060] group hover:border-orange-500">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl gap-1 flex items-center text-[#008060] group-hover:text-orange-500">
            <FaRegListAlt /> Question Type 2
          </h1>

          <button
            onClick={handleAddGap}
            className="hidden group-hover:block text-xl font-bold text-orange-500 hover:text-orange-700"
          >
            <span className="text-[#008060] text-2xl font-bold">+</span> Add a
            Question
          </button>
        </div>

        <div className="flex justify-center">
          {addAGap ? (
            <div>
              <h1 className="text-xl font-semibold my-1">Reserved Word</h1>
              <div className="w-[600px] min-h-16 border-2 border-[#008060] border-solid flex m-1 gap-1">
                <div className="flex-grow items-center">
                  {/* Fill in the word show in here as button */}
                  {underlinedWords?.length ? (
                    underlinedWords?.map((word) => (
                      <button key={word} className="btn normal-case m-1">
                        {word}
                      </button>
                    ))
                  ) : (
                    <h1 className="mt-2 text-center">
                      All underline words will be shown here..
                    </h1>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <h1>Click Add a button to add question</h1>
          )}
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

          {addAGap ? (
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
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FillInTheGap;
