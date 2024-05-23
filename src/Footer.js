import React from 'react';
import "./App.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <p className='foot'>© {currentYear}, Made with ❤️ by Initializ Inc.</p>
    </footer>
  );
}

export default Footer;
