import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons'; // Import the store icon
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black-800 flex items-center">
          <FontAwesomeIcon icon={faStore} className="mr-2" /> Thrift Store
        </h1>
      </nav>
      
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/83/7a/e8/837ae84549733543a095459f9186dcff.jpg')",
          animation: "slide 2s infinite alternate"
        }}
      >
        <h2 className="text-4xl font-bold text-white">Find Used items in affordable cost</h2>
        <p className="mt-4 text-lg font-bold text-white">Shop sustainably with our curated thrift collection.</p>
        <Link to="/shopnow">
          <button className='mt-6 px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-red-500'>
            Shop Now
          </button>
        </Link>
      </div>
      
      {/* Featured Products */}
      <section className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 text-center">Featured Products</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sample Products */}
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center h-full">
            <img src="https://www.streetouterwears.com/cdn/shop/files/vintage-jeff-gordon-dupont-red-nascar-racing-jacket-copy-40925971054848.jpg?v=1715691965&width=1445" alt="Product" className="w-full h-64 object-cover rounded" />
            <h4 className="mt-2 font-semibold">Vintage Jacket</h4>
            <p className="text-gray-600">1199 NRS</p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Now</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center h-full">
            <img src="https://genuine-vintage-sunglasses.com/upload/stblog/1/76/146/76146large.jpg" alt="Product" className="w-full h-64 object-cover rounded" />
            <h4 className="mt-2 font-semibold">Retro Sunglasses</h4>
            <p className="text-gray-600">899 NRS</p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Now</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center h-full">
            <img src="https://old-money.com/cdn/shop/files/2_7f349b01-ca7d-4fa3-b2d6-54dbbf363a5f.webp?v=1718305853&width=800" alt="Product" className="w-full h-64 object-cover rounded" />
            <h4 className="mt-2 font-semibold">Classic Watch</h4>
            <p className="text-gray-600">699 NRS</p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Now</button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Thrift Store. All rights reserved.</p>
        <p>Contact us: saileshtamang909@gmail.com | +977-9845351587</p>
      </footer>
    </div>
  );
};

export default Home;
