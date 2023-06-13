import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <div className="things">
          <div className="ring"></div>
          <div className="text">
            <span className="one">O</span>
            <span className="one">M</span>
            <span className="last">G</span>
          </div>
        </div>

        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
