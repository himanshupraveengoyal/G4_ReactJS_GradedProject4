import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './index.css';
import App from './components/App';
import DisplayInfo from './components/DisplayInfo'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/moreInfo/:id' element={<DisplayInfo />} />
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);