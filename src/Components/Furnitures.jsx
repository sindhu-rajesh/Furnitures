//import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-cover bg-center h-screen flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?furniture')" }}>
      <div className="bg-gray-900 bg-opacity-50 p-10 rounded-xl">
        <h2 className="text-5xl font-bold mb-4">Luxury & Contemporary Furniture</h2>
        <p className="text-xl">Transform your space with our premium furniture collection.</p>
        <a href="#products" className="mt-4 inline-block bg-amber-500 text-white py-2 px-6 rounded-lg hover:bg-amber-600">Shop Collection</a>
      </div>
    </section>  );
};

export default Hero;
