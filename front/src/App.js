import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Place from "./Page/Place/Place";
import DetailPlace from "./Page/DetailPlace/DetailPlace";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Place />} />
        <Route path="/Detail/:id" element={<DetailPlace />} />
      </Routes>
    </div>
  );
}

export default App;
