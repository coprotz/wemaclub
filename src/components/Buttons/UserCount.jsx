import React from 'react';
// import UsersIcon from '../../icons/UsersIcon';

const UserCount = ({ count }) => {
  return (
    <div className='user_count'>
       <p className='inline-block'>{count}</p>
    </div>
  );
};

export default UserCount;