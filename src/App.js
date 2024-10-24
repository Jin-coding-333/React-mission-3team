import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import { JongHun } from "./JongHun/JongHun";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="JongHun" element={<JongHun />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
