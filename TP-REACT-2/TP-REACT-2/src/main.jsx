import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './i18n';
import App from './App.jsx'

const root = document.getElementById('root')

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>  
      <App />
    </BrowserRouter>  
  </StrictMode>
)