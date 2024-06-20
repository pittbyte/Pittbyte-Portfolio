import React from 'react';
import { Image } from 'react-bootstrap';

const ProfileImage = ({ imagePath }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Image 
      src={imagePath}
      roundedCircle 
      fluid 
      alt="Profile" 
      style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }}
    />
  </div>
);

export default ProfileImage;