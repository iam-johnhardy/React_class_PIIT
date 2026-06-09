import React from 'react'

export const Modal = ({ open, onClose, children }) => {
  if (!open) return null

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      {/* Modal content container */}
      <div onClick={(e) => e.stopPropagation()} className=" bg-white p-6 rounded-xl w-full max-w-md">
        {children}
      </div>
    </div>
  )
}
