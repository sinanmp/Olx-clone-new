import React from 'react';

function Footer({setted}) {
    return (
<footer className={`bg-[#002f34] relative text-white py-4 px-40 bottom-0 w-full ${setted ? 'top-[226px]' : ''}`}>
        <div className="container flex justify-between text-center">
          <p className="font-medium text-sm">  Sitemap</p>
          <p className="font-medium text-sm"> Free Classifieds in India. © 2006-2024 OLX</p>
        </div>
      </footer>
    );
  }


  export default Footer