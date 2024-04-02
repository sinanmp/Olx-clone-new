import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext';

function MyAds() {
    const {user} = useAuth()
    const [products, setProducts] = useState([]);


    useEffect(()=>{
        const fetchProducts = async () => {
            try {
              const productsCollection = collection(db, 'products');
              const querySnapshot = await query(productsCollection, where('email', '==', user.email));
              const productsData = [];
              querySnapshot.forEach((doc) => {
                productsData.push({ id: doc.id, ...doc.data() });
              });
              console.log(productsData ,user.email)
              setProducts(productsData);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          };
          
    },[])
    console.log(user.email , 'this is email')
  return (
    <div>
      hiii this is my products
    </div>
  )
}

export default MyAds
