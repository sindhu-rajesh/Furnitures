//import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 animate-fadeIn">
      <h1 className="text-2xl font-serif animate-slideInLeft"> 🪑 Furnitures</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-400 transition duration-300 animate-slideInRight">Home</a></li>
          <li><a href="#products" className="hover:text-blue-400 transition duration-300 animate-slideInRight">Products</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition duration-300 animate-slideInRight">Contact</a></li>
          <li><a href="#about"className="hover:text-blue-400 transition duration-300 animate-slideInRight">About</a></li>
        </ul>
      </nav>
    </header>  );
};

export default Header;
