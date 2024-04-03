import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { SignOut } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdExitToApp } from 'react-icons/md';
import LoadingSpinner from './LoadingSniper';
import { MdListAlt } from 'react-icons/md';
function UserProfileComponent() {
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()
    const {user} = useAuth()

    const handlLogout = async()=>{
        setLoading(true)
        try {
           await SignOut()  
            navigate('/login')
            toast.error('Logged out',{
                autoClose:1000
            });
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

  return (
    <>
         {loading && <LoadingSpinner />} 

         <div className="absolute lg:top-5 lg:right-20 w-80 right-0 top-0 mt-10 mr-5 bg-black text-white z-40 p-4 rounded shadow">
      <div className="flex items-center space-x-3"> {/* Flex container for aligning items */}
        <img
          src={user.photoURL ? user.photoURL : 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='}
          alt=""
          className="w-12 h-12 rounded-full" // Adjust size as needed
        />
        <div>
          <p className="font-semibold">{user.email}</p> {/* Display username */}
          <div className='flex justify-between gap-5'>
          <button onClick={()=>navigate('/myAds')} className="bg-yellow-600 flex gap-1 text-white px-3 py-1 rounded mt-2"><span className='mt-1'><MdListAlt/></span> My ads</button> 
          <button onClick={handlLogout} className="bg-red-500 flex gap-1 text-white px-3 py-1 rounded mt-2"><span className='mt-1'><MdExitToApp/></span> Logout</button> {/* Logout button */}
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default UserProfileComponent;
