import React, { useState } from 'react';
import Footer from '../components/footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { addAd } from '../context/authContext';
import { toast } from 'react-toastify';
import { useAuth } from '../context/authContext';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage' 
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import LoadingSpinner from '../components/LoadingSniper';

function ProductForm() {
    const [loading, setLoading] = useState(false); 
    const {user , storage} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(location.search)
    const cat = searchParams.get('cat')
    console.log(cat)
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productDescription, setProductDescription] = useState('');

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();


    if(!productImage && !productName && !productPrice && !productDescription){
      toast.error('Please fill all details',{
        autoClose:1000
      })
      document.getElementById('productPrice').style.border='red solid 2px'
      document.getElementById('productName').style.border='red solid 2px'
      document.getElementById('productImage').style.border='red solid 2px'
      document.getElementById('productDescription').style.border='red solid 2px'
      return
    }



    if(!productName){
      toast.error('Please enter Product Name also',{
        autoClose:1000
      })
      document.getElementById('productName').style.border='red solid 2px'
      return
    }else{
      document.getElementById('productName').style.border='gray solid 2px'
    }


   
    if(!productPrice){
      toast.error('Please enter productPrice also',{
        autoClose:1000
      })
      document.getElementById('productPrice').style.border='red solid 2px'
      return
    }else{
      document.getElementById('productPrice').style.border='gray solid 2px'
    }

    if(!productImage){
      toast.error('Please enter productImage also',{
        autoClose:1000
      })
      document.getElementById('productImage').style.border='red solid 2px'
      return
    }else{
      document.getElementById('productImage').style.border='gray solid 2px'
    }


    if(!productDescription){
      toast.error('Please enter productDescription also',{
        autoClose:1000
      })
      document.getElementById('productDescription').style.border='red solid 2px'
      return
    }else{
      document.getElementById('productDescription').style.border='gray solid 2px'
    }


    setLoading(true);
    try{

        const storageRef = ref(storage, `/images/${productImage.name}`);
        const uploadedFileSnapshot = await uploadBytes(storageRef, productImage);
        const url = await getDownloadURL(uploadedFileSnapshot.ref);
    
        const obj = {
            productName:productName,
            productPrice:productPrice,
            productImage:url,
            productDescription:productDescription,
            catogery:cat,
            email:user.email
        }


        await addAd(obj)
        navigate('/')
        toast.success("Your Ad is Live",{
            autoClose:1000
        })
    } catch (error) {
        console.log(error)
    } finally {
        setLoading(false);
      }
  };
 
    
  return (
    <>
       {loading && <LoadingSpinner />} 
    <nav className='w-full fixed z-10 bg-slate-50 h-[50px] border-b border-gray-300'>
        <ArrowBackIcon onClick={()=>navigate('/sell')} className="ml-3 mt-3 cursor-pointer" /> 
      </nav>
    
    <div className='relative top-32'>
        {/* <h1 className='text-center mb-5 capitalize'><span className='font-semibold'>More Details About Your </span>: {cat ? cat : 'product'}</h1> */}
         <form onSubmit={handleSubmit} className="mx-auto px-4 md:px-0 max-w-md">
      <div className="mb-4">
        <label htmlFor="productName" className="block font-semibold">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={handleProductNameChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="productPrice" className="block font-semibold">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={handleProductPriceChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="productImage" className="block font-semibold">Product Image:</label>
        <input
          type="file"
          id="productImage"
          accept="image/*"
          onChange={handleProductImageChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="productDescription" className="block font-semibold">Product Description:</label>
        <textarea
          id="productDescription"
          value={productDescription}
          onChange={handleProductDescriptionChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Product</button>
    </form>
    </div>
    <Footer setted='true' />
    </>

   
  );
}

export default ProductForm;
