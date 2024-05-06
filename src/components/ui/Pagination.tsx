import React, { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => { // Specify the type of 'page' parameter as 'number'
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <ul className="flex justify-center">
      <li className="mx-1">
        <button
          className={`px-3 py-1 rounded-full ${currentPage === 1 ? "bg-gray-300 text-gray-800 cursor-not-allowed" : "bg-gray-300 text-gray-800"}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      {Array.from({ length: totalPages }, (_, i) => (
        <li key={i} className="mx-1">
          <button
            className={`px-3 py-1 rounded-full ${currentPage === i + 1 ? "bg-gray-600 text-white" : "bg-gray-300 text-gray-800"}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        </li>
      ))}
      <li className="mx-1">
        <button
          className={`px-7 py-1 rounded-full ${currentPage === totalPages ? "bg-gray-300 text-gray-800 cursor-not-allowed" : "bg-gray-300 text-gray-800"}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
