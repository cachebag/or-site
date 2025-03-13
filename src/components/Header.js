import React from 'react';

function Header() {
  return (
    <header className="header animate__animated animate__fadeInDown">
      <nav>
        <h1>LogiConsult</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

