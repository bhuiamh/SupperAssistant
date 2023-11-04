import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDrag } from "react-dnd";

function App() {
  return (
    <div>
      <img
        src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593111703/img_logo?e=2147483647&v=beta&t=GXoH1LXt9jy32BZy9mCLWxerKUmdGB6xCQStyv7hi34"
        alt=""
      />
      <h1 className="font-bold text-8xl">Hello Tailwind</h1>
    </div>
  );
}

export default App;
