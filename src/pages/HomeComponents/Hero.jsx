import React from "react";
import homepageimage from "../../assets/homepageimage.png";

const Hero = () => {
  return (
    <div className=" bg-[#103556]">
      <div className="w-full flex flex-col-reverse md:flex-row md:justify-between items-center  md:p-6 space-y-4 md:space-y-0">
        <div className="text-[#FFFFFF] flex flex-col justify-between md:w-1/2 text-center md:text-left">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-[400px] mx-auto md:mx-0">
              Workforce Management for The Changing World.
            </div>
            <div className="text-sm sm:text-base md:text-lg max-w-[400px] mx-auto md:mx-0 mt-2">
              Streamline processes, empower workers, collaborate across the
              organization, and align teams.
            </div>
          </div>

          <div className="mt-4">
            <button className="bg-yellow-300 px-4 py-2 sm:px-6 sm:py-3 rounded-md text-black font-semibold text-sm sm:text-base">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Homepage Image */}
        <div className="w-full md:w-3/5 flex justify-center mt-4 md:mt-0">
          <img
            src={homepageimage}
            alt="Home Page"
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
