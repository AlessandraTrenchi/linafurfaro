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
    
    const toggleMenu = () => {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show');
      };
    
      
      // Define your search logic here
    const searchElements = () => {
    // Perform search logic based on the search term (searchTerm)
    // Return the search results as an array of elements or an appropriate data structure
    // For simplicity, let's assume you have an array of nav links
    const navLinks = [
      { id: 1, title: 'Home', url: './src/index.html' },
      { id: 2, title: 'Libri', url: './src/libri.html' },
      { id: 2, title: 'Poesie', url: './src/poesie.html' },
      { id: 2, title: 'Articoli', url: './src/articoli.html' },
      { id: 2, title: 'Copioni', url: './src/copioni.html' },
      { id: 3, title: 'Incontri', url: './src/incontri.html' },
      { id: 4, title: 'Teatro', url: './src/teatro.html' },
      { id: 5, title: 'Recensisco', url: './src/recensisco.html' },
      { id: 6, title: 'Scrivono', url: './src/scrivono.html' },
      { id: 7, title: 'Tempi', url: './src/tempinuovi.html' },
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
          <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
            
            <li className="inx"><a href="index.html">{author}</a></li>
            <li>
                <button onClick={toggleDropdown}>HOME</button>
                {isOpen && (
                <ul className='dropdown'>
                    <li a href="./src/eventi.html" className="in">EVENTI</li>
                    <li a href="./src/eventipassati.html" className="in">EVENTI PASSATI</li>
                    <li a href="./src/riconoscimenti.html" className="in">RICONOSCIMENTI</li>
                    </ul>
                    )}
             </li>
             <li>
             <button onClick={toggleDropdown}>PUBBLICAZIONI</button>
            {isOpen && (
              <ul className='dropdown'>
                <li className='in'> <a href="./src/libri.html">LIBRI</a></li>
                <li className="in"> <a href="./src/poesie.html">POESIE</a></li>
                <li className="in"> <a href="./src/articoli.html">ARTICOLI</a></li>
                <li className="in"><a href="./src/copioni.html" >COPIONI TEATRALI</a></li>
              </ul>
              )}
             </li>
            <li className='in'><a href="./src/incontri.html">INCONTRI CON L'AUTRICE</a></li>
            <li className="in"><a href="/src/teatro.html">TEATRO</a></li>
            <li>
                <button onClick={toggleDropdown}>DIDATTICA</button>
                {isOpen && (
                <ul className='dropdown'>
                    <li className="in"><a href="./src/problemi.html">PROBLEMI</a></li>
                    <li className="in"><a href="./src/disegni.html">DISEGNI DEI BAMBINI</a></li>
                    </ul>
                    )}
            </li>
            
            <li className="in"><a href="./src/recensisco.html">RECENSISCO</a></li>
            <li className="in"><a href="./src/scrivono.html">SCRIVONO DI ME</a></li>
            <li className="in"><a href="./src/tempinuovi.html">TEMPI NUOVI</a></li>
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
  