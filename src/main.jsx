import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { AuthContextProvider } from './context/authContext.jsx'
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <BrowserRouter>
      <App />
      <ToastContainer />
  </BrowserRouter>
  </AuthContextProvider>

)
