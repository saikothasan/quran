import React from 'react';

const Header = () => (
  <header className="bg-green-600 text-white p-6">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">Quran App</h1>
      <nav>
        <a href="/" className="text-white hover:text-gray-300 mx-2">Home</a>
        <a href="/about" className="text-white hover:text-gray-300 mx-2">About</a>
        <a href="/contact" className="text-white hover:text-gray-300 mx-2">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
