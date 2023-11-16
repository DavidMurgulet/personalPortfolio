import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';

const Resume = () => {
  const nav = useNavigate();

  React.useEffect(() => {
    Navigate('src/pdf/W24Resume5 copy.pdf', { replace: true });
  }, [Navigate]);
  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>

            <Route path='*' element={<div>404 :3</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
