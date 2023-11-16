import React from 'react';
import Link from 'next/link';
import styles from './navbar.css';


const Navbar = () => {
  return ( 
   <nav className="navbar">
    <div className="logo">
    <img src="./logo-melkart-1.png" alt="Logo"/>
    </div>
    <div className="nav-links">
      <Link href="/">
        Accueil
      </Link>
      <Link href="/">
        Notre Equipe
      </Link>
      <Link href="/">
       Demander un Devis
      </Link>
      <Link href="/">
       contact
      </Link>
    </div>
   </nav>
   );
}
 
export default Navbar;