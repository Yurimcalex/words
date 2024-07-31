import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import Words from './page1/Page1.jsx';
import NewWords from './page2/Page2.jsx';
import useTheme from './useTheme.js';


function App() {
  const [theme, changeTheme] = useTheme(); 

  return (
    <div className={`app ${theme}-1 roboto-reg`}>
      <BrowserRouter>
        <Header
          theme={theme} 
          setTheme={changeTheme}
        />

        <Routes>
          <Route path="/" element={<Words theme={theme} />} />
          <Route path="new" element={<NewWords theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;