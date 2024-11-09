import React from 'react';
import { FaPlus } from 'react-icons/fa'; // Import the Plus icon from react-icons

const FloatingButton = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      <FaPlus className='plus-icon' />
    </button>
  );
};

export default FloatingButton;
 