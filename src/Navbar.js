import React, { useState } from 'react';
import './App';
import './Navbar.css';



function Navbar() {
    const author = "Lina Furfaro";
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className='Navbar'>
        <ul className='menu'>
          <ul className='dropdown-menu'>
            <li className="in">{author}</li>
            <button onClick={toggleDropdown}>HOME</button>
            {isOpen && (
              <ul className='dropdown'>
                <li>EVENTI</li>
                <li>EVENTI PASSATI</li>
                <li>RICONOSCIMENTI</li>
              </ul>
            )}
            <button onClick={toggleDropdown}>PUBBLICAZIONI</button>
            {isOpen && (
              <ul className='dropdown'>
                <li>LIBRI</li>
                <li>POESIE</li>
                <li>ARTICOLI</li>
                <li>COPIONI TEATRALI</li>
              </ul>
            )}
            <li className='in'>L'AUTRICE</li>
            <li className="in">INCONTRI CON L'AUTRICE</li>
            <li className="in">TEATRO</li>
            <button onClick={toggleDropdown}>DIDATTICA</button>
            {isOpen && (
              <ul className='dropdown'>
                <li>PROBLEMI</li>
                <li>DISEGNI DEI BAMBINI</li>
              </ul>
            )}
            <li className="in">RECENSISCO</li>
            <li className="in">SCRIVONO DI ME</li>
            <li className="in">TEMPI NUOVI</li>
            <li className="in">CONTATTI</li>
          </ul>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  