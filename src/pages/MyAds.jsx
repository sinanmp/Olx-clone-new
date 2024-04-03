import { useEffect, useState } from 'react';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase.config';
import { useAuth } from '../context/authContext';
import Nav from '../components/Nav';
import AdCard from '../components/AdCard';
import LoadingSpinner from '../components/LoadingSniper';
import { toast } from 'react-toastify';


function MyAds() {
    const [loading ,setLoading]= useState(false)
    const { user } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                const productsCollection = collection(db, 'products');
                const q = query(productsCollection, where('email', '==', user.email));
                const querySnapshot = await getDocs(q);
                const productsData = [];
                querySnapshot.forEach((doc) => {
                    productsData.push({ id: doc.id, ...doc.data() });
                });
                setProducts(productsData);
                console.log(productsData)
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false)
            }
        };

        fetchProducts();
    }, [user]);


    const onDelete = async(adId , isModalOpen)=>{

        try {
            const productRef = doc(db, 'products', adId);
            await deleteDoc(productRef);
             isModalOpen(false)
             const productsCollection = collection(db, 'products');
             const q = query(productsCollection, where('email', '==', user.email));
             const querySnapshot = await getDocs(q);
             const productsData = [];
             querySnapshot.forEach((doc) => {
                 productsData.push({ id: doc.id, ...doc.data() });
             });
             setProducts(productsData);
        } catch (error) {
            console.log(error)
        }

    }


    if (!products.length) {
        return (
            <div>
            {loading && <LoadingSpinner />}
            <Nav />
            <div className="container mx-auto pt-[100px] max-w-screen-xl px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">Your Ads</h1>
                <p className="mb-4">Email: {user.email}</p>
                <h2 className='text-xl font-bold'>No Ads From You...</h2>
            </div>
        </div>
          
        )
    }


    return (
        <div>
        {loading && <LoadingSpinner />} 
            <Nav />
            <div className="container mx-auto pt-[100px] max-w-screen-xl px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">Your Ads</h1>
                <p className="mb-4">Email: {user.email}</p>
                {products.map((product) => (
                    <AdCard key={product.id} onDelete={onDelete} product={product} />
                ))}
            </div>
        </div>
    );
}

export default MyAds;
