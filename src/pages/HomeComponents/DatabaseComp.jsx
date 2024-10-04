import React from "react";
import middleimage1 from "../../assets/middleimage1.png";
import middleimage2 from "../../assets/middleimage2.png";

const DatabaseComp = () => {
  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-36 mt-6 sm:mt-14">
      <div className="text-4xl font-bold md:text-3xl text-center ">
        <h1>Secure Employee Database Management</h1>
      </div>

      <div className="w-full mt-5 text-center px-4 mb-5 flex justify-center">
        <h3 className="font-normal text-base md:text-xl lg:w-1/2">
          Seamless and secure is the motto we live by. We ensure that the
          privacy of business and employee data gets the foremost attention.
          Here's how we handle security.
        </h3>
      </div>

      {/* Middle 2 Images */}
      <div className="flex flex-col sm:flex-row justify-evenly items-center sm:mt-5 md:mt-5">
        <div className="flex flex-col items-center mb-6 sm:mb-0 w-full sm:w-1/2 px-4">
          <img
            className="shadow-lg border-3 border-gray-300 w-full h-auto object-cover"
            src={middleimage1}
            alt="Secure password management"
          />
          <div>
            <h1 className="text-center  md:font-normal text-base md:text-xl  mt-2">
              Secure password management using Zoho Vault
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6 sm:mb-0 w-full sm:w-1/2 px-4">
          <img
            className="shadow-lg border-gray-300 w-full h-auto object-cover"
            src={middleimage2}
            alt="Shielded access to employee info"
          />
          <div>
            <h1 className="text-center  md:font-normal text-base md:text-xl  mt-2">
              Shielded access to employee info
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseComp;
