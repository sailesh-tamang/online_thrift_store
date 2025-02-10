import React from "react";

const Shopnow = () => {
  return (
    <div>
        <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Shop Now</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/8a/46/5f/8a465ff1a30645af80d77988f4e7b80b.jpg" alt="Product 1" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 1</h3>
            <p className="text-gray-700 mt-2">$29.99</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Buy Now
            </button>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/88/06/5b/88065b5156b5f81045cdc66d8a1381aa.jpg" alt="Product 2" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 2</h3>
            <p className="text-gray-700 mt-2">$39.99</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
                Buy Now
            </button>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/4e/39/f1/4e39f14c41714d077b490d045dfe9689.jpg" alt="Product 3" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 3</h3>
            <p className="text-gray-700 mt-2">$49.99</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Buy Now
            </button>
            </div>
        </div>
        </div>
        {/* Footer */}
        <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-center text-white">
        <p>&copy; 2025 Clothing Store. All rights reserved.</p>
        <p>Contact us: <a href="https://www.instagram.com/aashish.stha007/" className="text-blue-400">Instagram</a></p>
        </div>
    </footer>
    </div>
    
  );
};

export default Shopnow;