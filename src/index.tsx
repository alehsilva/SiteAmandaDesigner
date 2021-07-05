import Menu from './Paginas/Menu'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
  <BrowserRouter>
  <Menu></Menu>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);
