import Home from "./components/home";
import Move from "./components/move";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/move" element={<Move />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
