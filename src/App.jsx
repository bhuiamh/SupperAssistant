import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Question from "./components/Question";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Outlet></Outlet>
    </DndProvider>
  );
}

export default App;
