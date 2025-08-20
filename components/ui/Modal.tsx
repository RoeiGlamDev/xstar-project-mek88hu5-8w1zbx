import React from 'react';
import './Modal.css'; // Importing CSS for styling

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Return null if modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Overlay to close modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevents closing when clicking inside */}
        {title && <h2 className="modal-title">{title}</h2>} {/* Modal title */}
        <div className="modal-body">{children}</div> {/* Modal body content */}
        <button className="modal-close" onClick={onClose}>Close</button> {/* Close button */}
      </div>
    </div>
  );
};

export default Modal;