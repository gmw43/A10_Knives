import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalComp from './SharedComp/GlobalComp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalComp>
    <BrowserRouter basename="/A10_Knives">
      <App />
    </BrowserRouter>
  </GlobalComp>
)
