// components/Modal.jsx
import React from "react";

const AddNewProductModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default AddNewProductModal;
