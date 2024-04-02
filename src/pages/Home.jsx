import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/authContext'
import Banner from '../components/Banner'
import Products from '../components/Products'
function Home() {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
    const {user} = useAuth()
    console.log(user, 'this is user')
  return (
    <>
   <Navbar setIsProfileVisible={setIsProfileVisible} isProfileVisible={isProfileVisible}  />
   <div onClick={()=>setIsProfileVisible(false)}>
   <Banner/>
    <Products/>
   </div>
    </>

  )
}

export default Home
