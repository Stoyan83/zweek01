import React from "react";

const Modal = ({ isModalOpen, closeModal }: any) => {
  return (
    isModalOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-auto">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">
              Thank you for contacting us!
            </h2>
            <p className="text-sm leading-relaxed">
              We've received your email and will get back to you soon.
            </p>
          </div>
          <div className="flex justify-end p-3 bg-gray-100">
            <button
              onClick={closeModal}
              className="text-sm font-semibold px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
