import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
