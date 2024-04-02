import React from 'react';
import { useAuth } from '../context/authContext';
import { SignOut } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UserProfileComponent() {
    const navigate = useNavigate()
    const {user} = useAuth()

    const handlLogout = async()=>{
        try {
           await SignOut()  
            navigate('/login')
            toast.error('Logged out');
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="absolute lg:top-5 lg:right-20 w-80 right-0 top-0 mt-10 mr-5 bg-white p-4 rounded shadow">
      <div className="flex items-center space-x-3"> {/* Flex container for aligning items */}
        <img
          src={user.photoUrl ? user.photoUrl : 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='}
          alt=""
          className="w-12 h-12 rounded-full" // Adjust size as needed
        />
        <div>
          <p className="font-semibold">{user.email}</p> {/* Display username */}
          <button onClick={handlLogout} className="bg-red-500 text-white px-3 py-1 rounded mt-2">Logout</button> {/* Logout button */}
        </div>
      </div>
    </div>
  );
}

export default UserProfileComponent;
