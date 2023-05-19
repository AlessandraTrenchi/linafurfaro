import React, { useState } from 'react';
import './App';
import './Navbar.css';



function Navbar() {
    const author = "Lina Furfaro";
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
      };
      // Define your search logic here
    const searchElements = () => {
    // Perform search logic based on the search term (searchTerm)
    // Return the search results as an array of elements or an appropriate data structure
    // For simplicity, let's assume you have an array of nav links
    const navLinks = [
      { id: 1, title: 'Home', url: './index.html' },
      { id: 2, title: 'Libri', url: './libri.html' },
      { id: 2, title: 'Poesie', url: './poesie.html' },
      { id: 2, title: 'Articoli', url: './articoli.html' },
      { id: 2, title: 'Copioni', url: './copioni.html' },
      { id: 3, title: 'Incontri', url: './incontri.html' },
      { id: 4, title: 'Teatro', url: './teatro.html' },
      { id: 5, title: 'Recensisco', url: './recensisco.html' },
      { id: 6, title: 'Scrivono', url: './scrivono.html' },
      { id: 7, title: 'Tempi', url: './tempinuovi.html' },
      // Add more nav links
    ];
    // Filter the nav links based on the search term
    const filteredNavLinks = navLinks.filter((link) =>
      link.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredNavLinks;
};
    return (
      <nav className='Navbar'>
        <ul className='menu'>
          <ul className='dropdown-menu'>
            
            <li className="inx">{author}</li>
            <li>
                <button onClick={toggleDropdown}>HOME</button>
                {isOpen && (
                <ul className='dropdown'>
                    <li a href="./eventi.html">EVENTI</li>
                    <li a href="./eventipassati.html">EVENTI PASSATI</li>
                    <li a href="./riconoscimenti.html">RICONOSCIMENTI</li>
                    </ul>
                    )}
             </li>
             <li>
             <button onClick={toggleDropdown}>PUBBLICAZIONI</button>
            {isOpen && (
              <ul className='dropdown'>
                <li className='navs'> <a href="./libri.html">LIBRI</a></li>
                <li> <a href="./poesie.html">POESIE</a></li>
                <li> <a href="./articoli.html">ARTICOLI</a></li>
                <li><a href="./copioni.html" >COPIONI TEATRALI</a></li>
              </ul>
              )}
             </li>
            <li><a href="./incontri.html">INCONTRI CON L'AUTRICE</a></li>
            <li className="in"><a href="">TEATRO</a></li>
            <li>
                <button onClick={toggleDropdown}>DIDATTICA</button>
                {isOpen && (
                <ul className='dropdown'>
                    <li><a href="./problemi.html">PROBLEMI</a></li>
                    <li><a href="./disegni.html">DISEGNI DEI BAMBINI</a></li>
                    </ul>
                    )}
            </li>
            
            <li className="in"><a href="./recensisco.html">RECENSISCO</a></li>
            <li className="in"><a href="./scrivono.html">SCRIVONO DI ME</a></li>
            <li className="in"><a href="./tempinuovi.html">TEMPI NUOVI</a></li>
            <li className="in"><a href="mailto:linafurfaro@gmail.com">CONTATTI</a></li>
            <li className="search">
          <input type="text" placeholder="Cerca..." value={searchTerm} onChange={handleSearch}/>
          {/* Render search results */}
          {searchTerm && (
            <li className="search-results">
              <ul>
                {searchElements().map((result) => (
                  <li key={result.id}>
                    <a href={result.url}>{result.title}</a>
                  </li>
                ))}
              </ul> 
            </li>
          )}
        </li>
          </ul>
        </ul>
       
      </nav>
    );
  }
  
  export default Navbar;
  