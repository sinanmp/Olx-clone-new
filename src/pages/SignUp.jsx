import React, { useState } from 'react';
import logo from '../assets/olx-seeklogo.png'
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { signUp } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Nav from '../components/Nav';
import Footer from '../components/footer';

export default function Signup() {
    let [name , setName] = useState('')
    let [email , setEmail] = useState('')
    let [phone ,setPhone] = useState('')
    let [password , setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()


    const handleFormSubmit = async(e)=>{
        e.preventDefault()
        try {
            await signUp(name ,email,password,phone)
            navigate('/')
            toast.success('Signed In',{
              autoClose:1000
            });
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
      <Nav/>


      <div className="flex justify-center items-center h-screen">
  <div className="border p-8 rounded-md shadow-md">
    <img onClick={()=>navigate('/')} src={logo}  className='mx-auto cursor-pointer w-32 h-32 mb-4' alt="" />
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name" className="block mb-2">Username</label>
      <input
       onChange={(e)=> setName(e.target.value)}
        type="text"
        id="name"
        className="w-full border py-2 px-3 mb-4 rounded-md focus:outline-none focus:border-blue-400"
        placeholder="Enter your username"
        value={name}
      />
      <label htmlFor="email" className="block mb-2">Email</label>
      <input
        onChange={(e)=> setEmail(e.target.value)}
        type="email"
        id="email"
        value={email}
        className="w-full border py-2 px-3 mb-4 rounded-md focus:outline-none focus:border-blue-400"
        placeholder="Enter your email"
      />
      <label htmlFor="phone" className="block mb-2">Phone</label>
      <input
        onChange={(e)=> setPhone(e.target.value)}
        type="tel"
        id="phone"
        value={phone}
        className="w-full border py-2 px-3 mb-4 rounded-md focus:outline-none focus:border-blue-400"
        placeholder="Enter your phone number"
      />
   <div className="relative">
  <label htmlFor="password" className="block mb-2">Password</label>
  <input
    type={showPassword ? "text" : "password"}
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    id="password"
    className="w-full border py-2 px-3 mb-4 rounded-md focus:outline-none focus:border-blue-400 pr-10"
    placeholder="Enter your password"
  />
  <button
    type="button"
    className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600 focus:outline-none"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? (
       <BsEyeFill className='mt-4'/>
    ) : (
        <BsEyeSlashFill className='mt-4'/>
    )}
  </button>
</div>
      <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Signup</button>
    </form>
    <p className="text-center mt-4">Already have an account? <a onClick={()=>navigate('/login')} className="text-blue-500 cursor-pointer">Login</a></p>
  </div>
</div>

      <Footer/>
    </>


  
  );
}