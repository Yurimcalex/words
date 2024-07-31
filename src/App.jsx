import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import Words from './page1/Page1.jsx';
import NewWords from './page2/Page2.jsx';
import useTheme from './useTheme.js';


function App() {
  const [theme] = useTheme(); 

  return (
    <div className={`app ${theme}-1 roboto-reg`}>
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