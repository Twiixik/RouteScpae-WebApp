// BottomSheetModal.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BottomSheetModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null; // Return nothing if modal is not open

  return (
    <div className="bottom-sheet-overlay" onClick={onClose}>
      <div className="bottom-sheet-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Options</h2>
          <FaTimes className="close-icon" onClick={onClose} />
        </div>
        <div className="modal-options">
          <div className="modal-option" onClick={() => navigate("/community/create-daily-post")}>
            <h3>Create a Post</h3>
            <p>For short updates, questions, or sharing a quick thought.</p>
          </div>
          <div className="modal-option" onClick={() => navigate("/community/create-article")}>
            <h3>Write an Article</h3>
            <p>For longer, more in-depth content or stories.</p>
          </div>
          <div className="modal-option" onClick={() => navigate("/community/create-discussion")}>
            <h3>Start a Discussion</h3>
            <p>For open-ended questions or topics meant to start conversations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSheetModal;
