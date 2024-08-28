import React from 'react';
import { Link } from 'react-router-dom'; 

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center p-8">
  
      <main className="text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Welcome to Our Company</h1>
        <p className="text-lg text-white mb-8">
          We are dedicated to providing exceptional services to our clients. Explore our offerings and see how we can assist you in achieving your goals.
        </p>
        <div className="flex justify-center space-x-4">
          <Link className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Our Services
          </Link>
        
        </div>
      </main>
    </div>
  );
};

export default HomePage;
