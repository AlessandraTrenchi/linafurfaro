import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../components/App';
import '../styles/Navbar.css';

function Navbar() {
  const author = 'Lina Furfaro';
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const searchElements = (searchTerm) => {
    const navLinks = [
      { id: 1, title: 'Home', url: '/' },
      { id: 2, title: 'Libri', url: '/libri' },
      { id: 2, title: 'Poesie', url: '/poesie' },
      { id: 2, title: 'Articoli', url: '/articoli' },
      { id: 2, title: 'Copioni', url: '/copioni' },
      { id: 3, title: 'Incontri', url: '/incontri' },
      { id: 4, title: 'Teatro', url: '/teatro' },
      { id: 5, title: 'Recensisco', url: '/recensisco' },
      { id: 6, title: 'Scrivono', url: '/scrivono' },
      { id: 7, title: 'Tempi', url: '/tempinuovi' },
    ];

    const filteredNavLinks = navLinks.filter((link) =>
      link.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredNavLinks;
  };

  return (
    <nav className="Navbar">
      <ul className="menu">
        <h2>
          <Link to="/" className="inx">
            {author}
          </Link>
        </h2>
        <li>
          <button onClick={toggleDropdown}>HOME</button>
          {isOpen && (
            <ul className="dropdown">
              <li className="in">
                <Link to="/eventi.html">EVENTI</Link>
              </li>
              <li className="in">
                <Link to="/eventipassati.html">EVENTI PASSATI</Link>
              </li>
              <li className="in">
                <Link to="/riconoscimenti.html">RICONOSCIMENTI</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button onClick={toggleDropdown}>PUBBLICAZIONI</button>
          {isOpen && (
            <ul className="dropdown">
              <li className="in">
                <Link to="/libri.html">LIBRI</Link>
              </li>
              <li className="in">
                <Link to="/poesie.html">POESIE</Link>
              </li>
              <li className="in">
                <Link to="/articoli.html">ARTICOLI</Link>
              </li>
              <li className="in">
                <Link to="/copioni.html">COPIONI TEATRALI</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="in">
          <Link to="/incontri.html">INCONTRI CON L'AUTRICE</Link>
        </li>
        <li className="in">
          <Link to="/teatro.html">TEATRO</Link>
        </li>
        <li>
          <button onClick={toggleDropdown}>DIDATTICA</button>
          {isOpen && (
            <ul className="dropdown">
              <li className="in">
                <Link to="/problemi.html">PROBLEMI</Link>
              </li>
              <li className="in">
                <Link to="/disegni.html">DISEGNI DEI BAMBINI</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="in">
          <Link to="/recensisco.html">RECENSISCO</Link>
        </li>
        <li className="in">
          <Link to="/scrivono.html">SCRIVONO DI ME</Link>
        </li>
        <li className="in">
          <Link to="/tempinuovi.html">TEMPI NUOVI</Link>
        </li>
        <li className="in">
          <a href="mailto:linafurfaro@gmail.com">CONTATTI</a>
        </li>
        <li className="search">
          <input
            type="text"
            placeholder="Cerca..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <li className="search-results">
              <ul>
                {searchElements(searchTerm).map((result) => (
                  <li key={result.id}>
                    <Link to={result.url}>{result.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
