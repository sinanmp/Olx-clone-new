import React from 'react';

function ConfirmationModal({ isOpen, onClose, onConfirm }) {
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <p className="text-lg mb-4">Are you sure you want to delete this ad?</p>
                        <div className="flex justify-end">
                            <button className="mr-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={onConfirm}>Delete</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" onClick={onClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ConfirmationModal;
