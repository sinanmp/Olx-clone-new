import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()
  return (   
    <nav className='w-full fixed  z-10 bg-slate-50 h-[50px] border-b border-gray-300'>
        <ArrowBackIcon onClick={() => navigate('/')} className="ml-3 mt-3 cursor-pointer" /> 
      </nav>

  )
}

export default Nav
