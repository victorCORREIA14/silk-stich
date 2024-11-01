import React from 'react';
import ReactDOM from 'react-dom/client';
import './core/scss/global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginView from './views/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginView/>}/>
    </Routes>
  </BrowserRouter>
);