// import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-slate-600 text-center mb-8">
          At <span className="font-semibold">Concept Furnitures</span>, we believe in providing high-quality, stylish, and functional furniture that transforms your living spaces.  
          With years of expertise in crafting premium furniture, we ensure elegance and comfort in every piece.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src="./src/assets/Decon-Concept-Furniture.jpg"
            alt="About Concept Furnitures"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-slate-600 mb-4">
              We aim to blend contemporary design with unmatched craftsmanship, ensuring each product is made to perfection. Our goal is to enhance your living and workspaces with furniture that speaks of comfort, quality, and style.
            </p>

            <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Premium quality handcrafted furniture</li>
              <li>Modern and classic designs to suit every taste</li>
              <li>Affordable pricing with exceptional durability</li>
              <li>Eco-friendly and sustainable materials</li>
            </ul>
          </div>
        </div>
      </div>
    </section>  );};

export default About;
