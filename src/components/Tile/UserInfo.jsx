import React from 'react';

// import Avatar from 'boring-avatars';
import { BsMic, BsMicMute } from "react-icons/bs";

const UserInfo = ({ peer, audioEnabled }) => {
  return (
    <div className='wema_card_outer'>
      <div className='wema_card'>
        <p className='wema_username'>
          {peer.name[0]}        
          {audioEnabled ? 
            <button className='btn_btn'><BsMic/></button> :  <button className='btn_btn'><BsMicMute/></button>}
          {/* {peer.roleName} */}
        </p>       
      </div>
      <div className='opacity-50'>
        <h6>{peer.name}</h6>
       
      </div>
    </div>
  );
};

export default UserInfo;