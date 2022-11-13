import logo from './frank.png';
import './App.css';
import LukePage from "./Pages/luketest";
import PeterPage from "./Pages/petertest";
import FrankPage from "./Pages/franktest";
import HomePage from './Pages/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { component } from 'react';
import  ReactDOM from 'react-dom/client';

export default function App() {
    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/HomePage' element={<HomePage />}/>
        <Route path='/LukePage' element={<LukePage />}/>
        <Route path='/FrankPage' element={<FrankPage />}/>
        <Route path='/PeterPage' element={<PeterPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);;
