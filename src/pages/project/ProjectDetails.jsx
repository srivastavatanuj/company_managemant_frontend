import React from "react";
 function ProjectDetails() {

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-purple-600 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Project details</h1>
      </div>
      <div className="p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Beris Magic</h2>
            <p className="mb-4">
              <strong>Start date:</strong>  04-06-2024
            </p>
            <p className="mb-4">
              <strong>Deadline:</strong> 26-10-2024
            </p>
            <p className="mb-4">
              <strong>Progress:</strong> 65% complete
            </p>
            <p className="mb-4">
              <strong>Manager:</strong> ###
            </p>
            <p className="mb-4">
              <strong>Employees:</strong> ## ## ##
            </p>
          </div>
          <div className=" flex justify-center">
            <img
              src=""
              alt="Project Illustration"
              className="rounded-lg shadow-md w-96 h-56 bg-slate-600"
            />

          </div>
        </div>


          <h3 className="text-xl font-semibold text-center">Description</h3>
          <p className="mt-2 w-auto text-center">
            BERIS MAGIC is a personalised learning experience which fosters
            self-expression & communication. It helps children prepare for the
            future by enhancing their vocabulary, motor skills, and cognitive
            thinking.
          </p>

        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
            Deadline:
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="deadline"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button type="button" className="ml-2 text-gray-500 hover:text-gray-700">
              {/* <Calendar size={20} /> */}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">Note: You are 5.5 hours ahead of server time.</p>
        </div>


      </div>
    </div>
  );
};

export default ProjectDetails;
