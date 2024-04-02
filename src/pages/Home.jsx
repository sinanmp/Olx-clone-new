import React from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/authContext'
import Banner from '../components/Banner'
import Products from '../components/Products'
function Home() {
    const {user} = useAuth()
    console.log(user, 'this is user')
  return (
    <>
    <Navbar/>
    <Banner/>
    <Products/>
    </>

  )
}

export default Home
