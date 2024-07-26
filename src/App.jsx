import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import Words from './Words.jsx';
import NewWords from './NewWords.jsx';

import { db } from './db/db.js';
console.log(db.getWordCount());
console.log(db.search('save'));

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Words />} />
          <Route path="new" element={<NewWords />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;