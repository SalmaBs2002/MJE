import zIndex from '@mui/material/styles/zIndex';
import React from 'react';
import Image from 'next/image';
import './ServiceCard.css';

const ServiceCard = ({ title, description , logoUrl}) => {
  
  return (
    
    <div className='cardStyle'>
     <div className='circleContainer' >
      <div className='circle' >
        <Image src={logoUrl} width={100} height={100} />
      </div>
      </div>
      <h3>{title}</h3>
      <h4>______________________________</h4>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard; 