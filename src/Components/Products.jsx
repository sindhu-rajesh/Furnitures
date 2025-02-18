//import React from "react";
import Alisio from "../assets/amanda.jpg";
import Amanda from "../assets/amanda.jpg";  
import Marco from "../assets/marco.jpg";

const products = [
  { id: 1, name: "Alisio", price: "$299", img: Alisio },
  { id: 2, name: "Amanda", price: "$99", img: Amanda },
  { id: 3, name: "Marco", price: "$399", img: Marco },
];

const Products = () => {
  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <p className="text-gray-600">Handpicked furniture for modern living.</p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
