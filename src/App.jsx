import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';




function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>words</div>} />
          <Route path="new" element={<div>new words</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
