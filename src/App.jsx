//import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Furnitures";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";

const App = () => {
  return (
    <div>
      <Header />
     <Hero />
      <Products />
      <About/>
    
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
