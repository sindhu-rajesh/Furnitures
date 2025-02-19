//import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-cover bg-center h-screen flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop')" }}>
      <div className="bg-transparent-900 bg-opacity-75 p-10 rounded-xl">
        <h2 className="text-5xl font-bold mb-4">Luxury & Contemporary Furniture</h2>
        <p className="text-xl">Transform your space with our premium furniture collection.</p>
        <a href="#products" className="mt-4 inline-block bg-amber-500 text-white py-2 px-6 rounded-lg hover:bg-amber-600">Shop Collection</a>
      </div>    </section>  );
};

export default Hero;
