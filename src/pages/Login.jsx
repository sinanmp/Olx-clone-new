import React, { useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../context/authContext'
import { toast } from 'react-toastify';
import Nav from '../components/Nav';
import Footer from '../components/footer';
import '../assets/google.css'
import { handleGoogleSignIn } from '../context/authContext';
import LoadingSpinner from '../components/LoadingSniper';

function Login(){
  const [loading, setLoading] = useState(false); 
    const [email ,setEmail] =useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);

    const handleFormSubmit =async(e)=>{
        e.preventDefault()
        setLoading(true);
        try {
            const data = await loginUser(email,password)
            console.log(data)
            navigate('/')
            toast.success('Logged In',{
              autoClose:1000
            });
        } catch (error) {
            console.log(error)
        } finally {
          setLoading(false);
        }

    }

    const handleGoogle = async(e)=>{
      setLoading(true)
      try {
        await handleGoogleSignIn()
        navigate('/')
        toast.success('Logged In',{
          autoClose:1000
        })
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

  return (
    <>
        {loading && <LoadingSpinner />} 
     <Nav/>

      <div className="flex justify-center items-center h-[90vh]">
    <div className="border p-8 rounded-md fixed shadow-md">
    <svg onClick={()=>navigate('/')} className='mx-auto w-32 h-28 mt-[-20px] mb-4 cursor-pointer' width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" ><path  d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          onChange={(e)=> setEmail(e.target.value)}
          type="email"
          id="email"
          className="w-full border py-2 px-3 mb-4 rounded-md focus:outline-none focus:border-blue-400"
          placeholder="Enter your email"
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
        <button className="w-full mb-3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
              <div id='btn2' onClick={handleGoogle} className='btn max-md:w-60 self-center'><img className='googleImage mr-2' src="https://i.imgur.com/8qKdyAR.png" alt="" />Continue with Google</div>
      </form>

      <p className="text-center mt-4">Don't have an account? <a  onClick={()=> navigate('/signup')} className="text-blue-500 cursor-pointer">Signup</a></p>
    </div>
  </div>

  <Footer/>

    </>

  )
}

export default Login
