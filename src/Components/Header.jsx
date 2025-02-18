//import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold"> Furnitures</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#products" className="hover:text-blue-400">Products</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          <li><a href="#about"className="hover:text-blue-400">About</a></li>
        </ul>
      </nav>
    </header>  );
};

export default Header;
