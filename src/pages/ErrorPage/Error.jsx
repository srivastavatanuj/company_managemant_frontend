import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/ErrorCornerImage.png";

const Error = () => {
  return (
    <div  className="">
      <div className="flex flex-col items-center justify-center mt-20 ">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Oops! Page not found
        </h2>
        <p className="mt-2 text-gray-500">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button className="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Go Back
          </button>
        </Link>
      </div>

      <div className="">
        <img
          src={image}
          alt="Error Illustration"
          className="w-52 h-52 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Error;
