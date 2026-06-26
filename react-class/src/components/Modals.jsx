import React from 'react'

export const Modals = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="bg-white p-6 rounded-xl" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}


