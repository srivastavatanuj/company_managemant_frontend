import React from 'react';
import img from '../../assets/1image.png';
import Employee from '../HomeComponents/Employee';

const EmpDetails = () => {
  return (
    <div className=" mt-10c mx-5 p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
          <img
            className="h-auto w-full max-w-xs md:max-w-md object-cover rounded-md"
            src={img}
            alt="Onboarding"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col w-full md:w-1/2 md:pl-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-center md:text-left md:text-3xl">
            Customized onboarding for the best employee experience
          </h1>
          <h3 className="mt-2 text-sm sm:text-base text-center md:text-left md:text-xl">
            Give your new hires the warm welcome they deserve with a tailored onboarding experience. Showcase your
            organizational culture and increase your impact. Create a portal for new hires, and pre-onboard them for a great first day!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default EmpDetails;
