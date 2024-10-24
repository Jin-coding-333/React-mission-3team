import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import { JongHun } from "./JongHun/JongHun";
import { HyuckJin } from "./HyuckJin/HyuckJin";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="JongHun" element={<JongHun />} />
          <Route path="HyuckJin" element={<HyuckJin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
