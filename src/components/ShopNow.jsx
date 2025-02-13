import React from "react";

const Shopnow = () => {
  return (
    <div>
        <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Shop Now</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" cart1 bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/8a/46/5f/8a465ff1a30645af80d77988f4e7b80b.jpg" alt="Product 1" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 1</h3>
            <p className="text-gray-700 mt-2">2000 NPR</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Add to Cart
            </button>
            </div>
            <div className=" cart2 bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/88/06/5b/88065b5156b5f81045cdc66d8a1381aa.jpg" alt="Product 2" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 2</h3>
            <p className="text-gray-700 mt-2">700 NPR</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Add to Cart
            </button>
            </div>
            <div className=" cart3 bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/4e/39/f1/4e39f14c41714d077b490d045dfe9689.jpg" alt="Product 3" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 3</h3>
            <p className="text-gray-700 mt-2">800 NPR</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Add to Cart
            </button>
            </div>
            <div className="cart4 bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/2c/2b/6c/2c2b6c283b13a118f6ebde9c27b91764.jpg" alt="Product 4" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 4</h3>
            <p className="text-gray-700 mt-2">4000 NPR</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Add to Cart
            </button>
            </div>
            <div className="cart5 bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/da/a2/08/daa2081058faed6a8cf243883c0e93b0.jpg" alt="Product 4" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 5</h3>
            <p className="text-gray-700 mt-2">700 NPR</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Add to Cart
            </button>
            </div>
            <div className="cart6 bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/ff/d6/4c/ffd64c86c8c4b4085116fa96adc8787e.jpg" alt="Product 4" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 6</h3>
            <p className="text-gray-700 mt-2">800 NPR</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Add to Cart
            </button>
            </div>
            <div className="cart7 bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/c2/00/87/c200877d51efe688d6abff22dc66330a.jpg" alt="Product 4" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 7</h3>
            <p className="text-gray-700 mt-2">400 NPR</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Add to Cart
            </button>
            </div><div className="cart8 bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/92/75/9a/92759a63a82a55398b7ef7e2a3f1c67b.jpg" alt="Product 4" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 8</h3>
            <p className="text-gray-700 mt-2">1100 NPR</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Add to Cart
            </button>
            </div><div className="cart9 bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/c0/4f/8d/c04f8dbe523c43652d55ddb55e6052ac.jpg" alt="Product 4" className="w-full h-80 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 9</h3>
            <p className="text-gray-700 mt-2">300 NPR</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Add to Cart
            </button>
            </div>
        </div>
        </div>
        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Thrift Store. All rights reserved.</p>
        <p>Contact us: saileshtamang909@gmail.com | +977-9845351587</p>
      </footer>
    </div>
    
  );
};

export default Shopnow;