import { useState } from "react";

/* https://6710ce3ba85f4164ef2f5ff8.mockapi.io/api/profiles 

  {
        "createdAt": "2024-10-17T03:53:51.456Z",
        "name": "Alyssa Reinger IV",
        "avatarUrl": "https://api.multiavatar.com/1212.svg",
        "id": "1"
    },
    
    
    */
function Profile(props) {
  const { name, avatarUrl } = props.info;

  return (
    <>
      <div className="profile">
        <img src={avatarUrl} />
        <span>{name}</span>
      </div>
    </>
  );
}

export default Profile;
