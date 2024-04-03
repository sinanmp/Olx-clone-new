import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationModal from '../components/Confirmation';

function AdCard({ product, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModal = () => {
        setIsModalOpen(true); 
    };
 
    const handleDelete = ()=>{
        onDelete(product.id ,setIsModalOpen)
    }

    const formattedPrice = new Intl.NumberFormat('en-IN').format(product.productPrice);

    return (
        <div className="bg-white block md:flex justify-between rounded-lg shadow-md p-6 mb-4">
            <img src={product.productImage} alt={product.productName} className="md:w-1/5 w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-semibold md:mt-[75px] mb-2">{product.productName}</h2>
            <p className="text-gray-600 md:mt-[77px] mb-2">{product.productDescription}</p>
            <div className="flex justify-between items-center">
                <div className="font-bold text-2xl">₹{formattedPrice}</div>
                <button onClick={handleModal} className="text-red-500 pl-20 font-semibold focus:outline-none flex items-center">
                    <DeleteIcon /> 
                </button>
            </div>
            <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleDelete} />
        </div>
    );
}

export default AdCard;
