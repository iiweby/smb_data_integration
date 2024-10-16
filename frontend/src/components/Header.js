// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">SMB</h1>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#" className="text-accent hover:text-highlight">Home</a></li>
            <li><a href="#" className="text-accent hover:text-highlight">About</a></li>
            <li><a href="#" className="text-accent hover:text-highlight">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
