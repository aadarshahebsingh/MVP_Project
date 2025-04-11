import React from 'react'

// Button.jsx
export const Button = ({ children, onClick, className = "" }) => {
    return (
      <button
        onClick={onClick}
        className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition ${className}`}
      >
        {children}
      </button>
    );
  };