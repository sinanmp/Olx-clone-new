import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase.config';


function ProductCard({ index ,product}) {
    console.log(index)
    const formattedPrice = new Intl.NumberFormat('en-IN').format(product.productPrice);
    
  return (
    <>
<div className="bg-white rounded-lg cursor-pointer shadow-md p-6 mb-4 relative overflow-hidden transition-transform duration-300 transform hover:scale-105">
  <span className={`absolute ${index < 4 ? 'flex' : 'hidden'}  top-6 left-6 bg-yellow-500 text-white py-1 px-2 rounded-tr-md rounded-bl-md`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="ml-1">Featured</span>
  </span>
  <img src={product.productImage} alt={product.name} className="w-full h-40 object-cover mb-4" />
  <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
  <p className="text-gray-600 mb-4">{product.productDescription}</p>
  <div className="flex justify-start font-bold text-2xl items-center">
    ₹<span className=" font-semibold text-lg">{formattedPrice}</span>
  </div>
</div>

    </>


  );
}

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const productsCollection = collection(db, 'products');
          const querySnapshot = await getDocs(productsCollection);
          const productsData = [];
          querySnapshot.forEach((doc) => {
            productsData.push({ id: doc.id, ...doc.data() });
          });
          setProducts(productsData);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);

   if(products.length){

    return (
        <>
        <div className="container mx-auto max-w-screen-xl mt-[300px] md:mt-[600px] px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">OLX Featured</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product, index) => (
          <ProductCard index={index} product={product} />
        ))}
      </div>
    </div>
    {products.length > 4 && (
            <div className="container mx-auto max-w-screen-xl    px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">For You</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.slice(4).map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
    )}

        </>
      );
   }else{
    <p className='mt-96'>No products</p>
   }
}

export default Products;
