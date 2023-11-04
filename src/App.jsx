import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BrilliantQuestion from "./components/BrilliantQuestion";
import Navbar from "./components/Navbar";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Navbar></Navbar>
      <div>
        <h1 className="font-bold text-8xl">Hello Tailwind</h1>
      </div>
      <BrilliantQuestion></BrilliantQuestion>
    </DndProvider>
  );
}

export default App;
