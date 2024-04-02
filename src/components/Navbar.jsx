import React, { useState } from 'react'
import { FaSearch ,FaPlus } from 'react-icons/fa';
import { IoChevronDownOutline ,IoChevronUpOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import '../index.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import ChatIcon from '@mui/icons-material/Chat';
import UserProfileComponent from './UserProfileComponent';
import { toast } from 'react-toastify';
function navbar() {
 const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [search ,setSearch] = useState('')
  const {user} = useAuth()
  console.log(user , 'this is ufsadfsaser') 
  const navigate = useNavigate()
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  const handleProfileClick = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  const handleSellClick = ()=>{
      if(user){
        navigate('/sell')
      }else{
        navigate('/login')
        toast.error("You need to login for sell",{
          autoClose:1000,
        })
      }
  }


  
   return (
    <nav className='py-6 bg-slate-300 h-16 fixed w-full top-0 left-0 z-30 transition-colors duration-300'>
        <div className='flex relative mainFlex w-full  bottom-4 gap-5 left-3'>
          <Link to={'/'}>
         <svg className='' width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon"><path  d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
          </Link>
        
         <div className='hidden sm:flex items-center'>
        <FaSearch size={'15px'} opacity={4} className="ml-2 absolute" />
        <input className='h-12 w-64 pl-8 border-2 rounded value border-black text-start' placeholder="" value="India" fdprocessedid="0b4aec"/>
        </div>

        <div className=' hidden h-auto md:flex'>
        <input
          className='md:w-[20vw] 2xl:w-[50vw] xl:w-[50vw] lg:w-[35vw] mainSearch h-12 border-2 rounded border-black text-start pl-3' // Added pl-3 class for left padding
          onChange={handleSearch}
          type="text"
          placeholder="Find Cars, Mobile Phones and more..." // Adjusted placeholder text
          data-aut-id="searchBox"
          value={search}
        />

       <div className="bg-black p-2 rounded-r relative right-2">
         <FaSearch className='relative top-1.5' size={20} color="white" />
        </div>
       </div> 

        <div className='pt-3 flex gap-1'>
            <p className='font-semibold'>ENGLISH</p>
            <IoChevronDownOutline className=' pb-1.5 size-8' size={25} color="black" />
        </div>
        

        <div className={`flex justify-end gap-3 md:gap-10`}>
        {!user ? (
  <div className='md:pl-5  max-[400]:'>
          <p onClick={() => navigate('/login')} className='font-semibold cursor-pointer text-lg pt-2 underline'>Login</p>
        </div>
      ) : (
        <div className='flex ml-6 md:ml-0 md:gap-3 gap-5 mt-3'>
          <div>
          <ChatIcon className='cursor-pointer' />
          </div>
        <div>
        <NotificationsIcon className='cursor-pointer' />
        </div>
       <div onClick={handleProfileClick} className='cursor-pointer'>
          <img src={user.photoUrl ? user.photoUrl : 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} alt="" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
       </div>
          </div>
      )}


  


    
       
        <div className=' pt-1 md:flex hidden  sellicon'>
            <button onClick={handleSellClick} className='border sellbutton rounded-3xl pl-2 w-20 md:w-23 border-black font-semibold relative left- h-10'><FaPlus className='absolute mt-[5px] pr-1 md:right-11 md:ml-5' size={15}/> SELL</button>
        </div>

        {user ? (
           <div className='pt-1 md:hidden flex  sellicon fixed bottom-8 left-0 right-0 justify-center'>
           <button onClick={handleSellClick} className='border sellbutton rounded-3xl pl-2 w-20 md:w-23 border-black font-semibold relative left- h-10'>
               <FaPlus className='absolute mt-[5px] pr-1 md:right-11 md:ml-5' size={15}/> SELL
           </button>
           </div>
        ) : (
          <div>
        <div className=' pt-1 md:hidden   sellicon'>
            <button onClick={handleSellClick} className='border sellbutton rounded-3xl pl-2 w-20 md:w-23 border-black font-semibold relative left- h-10'><FaPlus className='absolute mt-[5px] pr-1 md:right-11 md:ml-5' size={15}/> SELL</button>
        </div>
          </div>
        )}
        
     

        </div>
        </div>

        {isProfileVisible && (
              <div className="absolute top-0 right-0 bg-black bg-opacity-50">
                {/* Your profile component */}
                <UserProfileComponent />
              </div>
            )}
    </nav>
  )
}

export default navbar
