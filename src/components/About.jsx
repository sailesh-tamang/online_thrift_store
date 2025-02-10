import React from 'react';
import thriftStoreImage from '../assets/thriftimg.png'; // Adjust the path as necessary
import { FaInstagram, FaTiktok } from 'react-icons/fa'; // Importing icons from react-icons

function About() {
  return (
    <div className="h-[800px] bg-warm-white flex flex-col items-center justify-center p-8 relative">
      <h1 className="text-5xl font-bold text-gray-800 mb-4 z-10">Welcome to Our Online Thrift Store</h1>
      <p className="text-2xl text-gray-800 text-center mb-4 z-10">
        Our thrift store has been serving the community since 2024. We offer a wide range of second-hand items at affordable prices.
      </p>
      <p className="text-2xl text-gray-800 text-center mb-4 z-10">
        The store is owned by Sailesh Kumar Tamang and is located at Lalitpur, Sinchahiti.
      </p>
      <p className="text-2xl text-gray-800 text-center z-10">
        We are committed to providing quality products and excellent customer service. Thank you for supporting our business!
      </p>
      <div className="flex space-x-8 mt-8 z-10">
        <a href="https://www.instagram.com/sailesh_kr_tamang/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-gray-600">
          <FaInstagram size={40} />
          <span className="ml-2 text-xl">Instagram</span>
        </a>
        <a href="https://www.tiktok.com/@guitar____7" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-gray-600">
          <FaTiktok size={40} />
          <span className="ml-2 text-xl">TikTok</span>
        </a>
      </div>
      <img src={thriftStoreImage} alt="Thrift Store" className="absolute inset-0 w-full h-full object-cover opacity-70" />
    </div>
    
  );
}

export default About;