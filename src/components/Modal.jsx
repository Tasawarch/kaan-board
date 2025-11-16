import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Agar modal open nahi hai to kuch return mat karo

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] h-[720px]  relative z-10">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
