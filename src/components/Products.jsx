import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase.config';


function ProductCard({ product }) {
    const formattedPrice = new Intl.NumberFormat('en-IN').format(product.productPrice);
    
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <img src={product.productImage} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
      <p className="text-gray-600 mb-4">{product.productDescription}</p>
      <div className="flex justify-start font-bold text-2xl items-center">
       ₹<span className=" font-semibold text-lg">{formattedPrice}</span>
      </div>
    </div>
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
  
  return (
<div className="container mx-auto max-w-screen-xl mt-[300px]  md:mt-[600px] px-4 py-8">
  <h1 className="text-3xl font-semibold mb-4">OLX Products</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
</div>

  );
}

export default Products;
