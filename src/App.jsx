import { useState } from 'react'
import './App.css'
import {Route , Routes} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SellPage from './pages/SellPage'
import ProductForm from './pages/productForm'

function App() {

  return (
    <>
    <Routes>
   <Route path='/' element={<Home/>} ></Route>
   <Route path='/login' element={<Login/>} ></Route>
   <Route path='/signup' element={<SignUp/>} ></Route>
   <Route path='/sell' element={<SellPage/>} ></Route>
   <Route path='/form' element={<ProductForm/>} ></Route>
    </Routes>
    </>
  )
}

export default App
