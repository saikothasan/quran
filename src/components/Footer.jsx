import React from 'react';

const Footer = () => (
  <footer className="bg-green-600 text-white p-6 mt-10">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Quran App. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
