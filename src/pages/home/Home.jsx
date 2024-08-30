import React from 'react';
import homepageimage from '../../assets/homepageimage.png';
import cardimage1 from '../../assets/cardimage1.png';
import cardimage2 from '../../assets/cardimage2.png';
import cardimage3 from '../../assets/cardimage3.png';
import cardimage4 from '../../assets/cardimage4.png';
import middleimage1 from '../../assets/middleimage1.png';
import middleimage2 from '../../assets/middleimage2.png';
import employee from '../../assets/employee.png';
import img from '../../assets/1image.png';
import attendence from '../../assets/attendence.png';

const HomePage = () => {
  return (
    <div>
      {/* Home Page 1st text */}
      <div className="font-normal text-lg sm:text-xl text-center py-4 bg-slate-200">
        <h1>Introducing Employee Project Management Portal</h1>
      </div>

      {/* Two Text, Image, and Button */}
      <div className="w-full bg-[#103556] flex flex-col md:flex-row md:justify-between items-center p-4 md:p-6 space-y-4 md:space-y-0">
        <div className="text-[#FFFFFF] flex flex-col justify-between md:w-1/2 text-center md:text-left">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-[400px] mx-auto md:mx-0">
              Workforce Management for The Changing World.
            </div>
            <div className="text-sm sm:text-base md:text-lg max-w-[400px] mx-auto md:mx-0 mt-2">
              Streamline processes, empower workers, collaborate across the organization, and align teams.
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
          <img src={homepageimage} alt="Home Page" className="object-contain max-w-full h-auto" />
        </div>
      </div>

      <div className='max-full mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8">
          {[cardimage1, cardimage2, cardimage3, cardimage4].map((image, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
              <img className=" h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24" src={image} alt={`Card ${index + 1}`} />
              <h1 className="text-center mt-2 sm:mt-4 text-base sm:text-lg font-semibold">Card Content {index + 1}</h1>
            </div>
          ))}
        </div>

        <div className="text-xl sm:text-2xl text-center font-semibold py-4 sm:py-6">
          <h1>Secure Employee Database Management</h1>
        </div>

        <div className="w-full text-center px-4 mb-6 flex justify-center">
          <h3 className="text-base sm:text-lg md:text-xl w-full md:w-2/3 lg:w-1/2">
            Seamless and secure is the motto we live by. We ensure that the privacy of
            business and employee data gets the foremost attention. Here's how we handle security.
          </h3>
        </div>

        {/* Middle 2 Images */}
        <div className="flex flex-col sm:flex-row justify-evenly items-center mt-8 sm:mt-12 md:mt-20">
          <div className="flex flex-col items-center mb-6 sm:mb-0 w-full sm:w-1/2 px-4">
            <img className="shadow-lg border-4 border-gray-300 w-full h-auto object-cover" src={middleimage1} alt="Secure password management" />
            <div>
              <h1 className="text-center text-base sm:text-lg md:text-xl  mt-2">Secure password management using Zoho Vault</h1>
            </div>
          </div>
          <div className="flex flex-col items-center mb-6 sm:mb-0 w-full sm:w-1/2 px-4">
            <img className="shadow-lg border-4 border-gray-300 w-full h-auto object-cover" src={middleimage2} alt="Shielded access to employee info" />
            <div>
              <h1 className="text-center text-base sm:text-lg md:text-xl  mt-2">Shielded access to employee info</h1>
            </div>
          </div>
        </div>

        <div className="text-center px-4 py-6">
          <h1 className="text-xl sm:text-2xl sm:mt-8 md:text-2xl font-semibold">Employee Project Management</h1>
          <h3 className="text-base sm:text-lg md:text-xl mt-4 mx-auto max-w-3xl">
            Our platform provides an efficient way to manage employees and track performance, all within a secure, customizable environment.
          </h3>
        </div>

        {/* Employee Cards */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:mt-8 lg:grid-cols-4 justify-items-center">
          {Array(4).fill().map((_, index) => (
            <div key={index} className="flex justify-center items-center h-48 w-48 sm:h-56 sm:w-56 md:h-60 md:w-60 bg-[#e7e0e0] rounded-lg shadow-lg">
              <div className="flex flex-col justify-center items-center">
                <img className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full" src={employee} alt="Employee" />
                <h1 className="mt-2 sm:mt-4 text-lg sm:text-xl font-bold">Prakhar</h1>
                <h3 className="text-gray-600 text-sm sm:text-base">Backend Developer</h3>
                <h2 className="text-gray-500 text-sm sm:text-base">Devine</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xl sm:text-2xl text-center mt-8 sm:mt-12 md:text-2xl font-semibold">
          <h1>Employee Onboarding Management</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-4">
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-lg sm:text-xl font-semibold">Attendance management that empowers your workforce</h1>
            <h2 className="mt-2 text-sm sm:text-base">
              Bid farewell to tedious excel sheets, and say hello to a more efficient way to manage employee attendance.
              Generate insightful reports, regularize attendance, and empower your on-site and remote employees to check in
              from anywhere with our cloud-based attendance management system.
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img className=" h-auto w-full max-w-md object-cover rounded-md" src={attendence} alt="Attendance Management" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-4">
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1 mt-4 md:mt-0">
            <img className="h-auto w-full max-w-md object-cover rounded-md" src={img} alt="Onboarding" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 order-1 md:order-2">
            <h1 className="text-xl sm:text-xl font-semibold">Customized onboarding for the best employee experience</h1>
            <h3 className="mt-2 text-sm sm:text-base">
              Give your new hires the warm welcome they deserve with a tailored onboarding experience. Showcase your
              organizational culture and increase your impact. Create a portal for new hires, and pre-onboard them for a great first day!
            </h3>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                Employee Self-service
              </h2>
              <p className="text-sm md:text-base lg:text-base">
                Eliminate the middle-man and give your people the autonomy to view and maintain their own records. With Kurmato People, employees
                can fill in their details, apply for leave, submit approvals, among other things.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                Set objectives for clarity
              </h2>
              <p className="text-sm md:text-base lg:text-base">
                Give your employees clarity by defining the objectives of their new role. You can tag goals based on designation,
                department, or both. Our onboarding module ensures that your new hires are well-informed and well-equipped for their job requirements from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;