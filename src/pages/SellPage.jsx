import React from 'react';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import HomeIcon from '@mui/icons-material/Home';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WorkIcon from '@mui/icons-material/Work';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ChairIcon from '@mui/icons-material/Chair';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';  
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import PetsIcon from '@mui/icons-material/Pets';
import BuildIcon from '@mui/icons-material/Build';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';

function SellPage() {
    const navigate = useNavigate()

  const categories = [
    { icon: <DriveEtaIcon />, name: 'Cars' },
    { icon: <HomeIcon />, name: 'Properties' },
    { icon: <SmartphoneIcon />, name: 'Mobiles' },
    { icon: <WorkIcon />, name: 'Jobs' },
    { icon: <DirectionsBikeIcon />, name: 'Bikes' },
    { icon: <SportsEsportsIcon />, name: 'Electronics & Appliances' },
    { icon: <LocalShippingIcon />, name: 'Commercial Vehicles & Spares' },
    { icon: <ChairIcon />, name: 'Furniture' },
    { icon: <ShoppingBagIcon />, name: 'Fashion' },
    { icon: <SportsBaseballIcon />, name: 'Books, Sports & Hobbies' },
    { icon: <PetsIcon />, name: 'Pets' },
    { icon: <BuildIcon />, name: 'Services' },
    { icon: <FastfoodIcon />, name: 'Food & Services' },
  ];

  const manageSellCategory = async(cat) => {
        navigate(`/form?cat=${cat}`)
  }

  return (
    <>
      <nav className='w-full fixed  z-10 bg-slate-50 h-[50px] border-b border-gray-300'>
        <ArrowBackIcon onClick={() => navigate('/')} className="ml-3 mt-3 cursor-pointer" /> 
      </nav>

      <h1 className="text-2xl font-bold pt-20 text-center">POST YOUR AD</h1>

      <div className="flex justify-center items-center min-h-screen" style={{ marginTop: "-30px", paddingBottom: "50px" }}>
        <div className='w-[400px] font-medium h-[576px] border block  border-gray-200'>
          {/* Render category items dynamically */}
          {categories.map((category, index) => (
            <div onClick={() => manageSellCategory(category.name)} key={index} className='w-full hover:bg-slate-400 items-center gap-1 flex justify-between border h-12 border-gray-200 cursor-pointer'>
             <div className='flex gap-1'>
             {category.icon && React.cloneElement(category.icon, { className: 'pl-2' })}
              <h3>{category.name}</h3>
             </div>
              <div >
              <ArrowForwardIcon />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default SellPage;
