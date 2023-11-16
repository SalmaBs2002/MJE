import styles from './Section1.css';
import React from 'react';
import Devis_Button from './devis-button';


const Section1 = () => {
  return ( 
  <div className="section1">
   <img src='/img.jpg' alt='image'/>
   <h1 className='title'>Melkart Junior Entreprise</h1>
   <h2 className='sous-title'>Making IT Happen</h2>
   <Devis_Button/>
  
   
    
    </div>
   );
};
 
export default Section1;