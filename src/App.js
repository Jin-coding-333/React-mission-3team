import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import { JongHun } from "./JongHun/JongHun";
import { HyuckJin } from "./HyuckJin/HyuckJin";
import Jinhan from "./Jinhan/Jinhan";
import {Yeji} from "./Yeji/Yjmain.js"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="JongHun" element={<JongHun />} />
          <Route path="HyuckJin" element={<HyuckJin />} />
          <Route path="Jinhan" element={<Jinhan />} />
          <Route path="Yeji" element={<Yeji />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
