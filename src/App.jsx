import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import Words from './Words.jsx';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Words />} />
          <Route path="new" element={<div>new words</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;