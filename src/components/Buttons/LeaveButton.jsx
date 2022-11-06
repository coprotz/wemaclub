import React from 'react';

const LeaveButton = ({ onClick }) => {
  return (
    <button
      className='btn_leave'
      onClick={onClick}
    >
      Ondoka
    </button>
  );
};

export default LeaveButton;