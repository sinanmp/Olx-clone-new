import React from 'react';
import { useProfileVisibility } from '../State';

function Banner() {
  const {isProfileVisible ,setIsProfileVisible} = useProfileVisibility
  return (
    <div onClick={()=>setIsProfileVisible(false)} className='w-full absolute  top-[64px]'>
      <img
        className='object-cover w-full  sm:h-[300px] md:h-[400px] lg:h-[400px] h-[200px] xl:h-[500px]'
        src="https://scontent-bom2-1.xx.fbcdn.net/v/t39.30808-6/420474973_781834080655372_6150883909337339173_n.png?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9OPYkgSfBCkAX86TpEM&_nc_ht=scontent-bom2-1.xx&oh=00_AfAjD-wcjMVA4o7vsBqb3dote6cj0eh-KLWA2H-rijKptQ&oe=66116C51"
        alt="Banner"
      />
    </div>
  );
}

export default Banner;
