
import React from 'react';


 function AddProject() {
  return (
    <div className="bg-gray-100 p-6 max-w-2xl mx-auto mt-5 mb-5">
      <h1 className="text-2xl font-semibold mb-6">Add projects</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="project-name" className="block text-sm font-medium text-gray-700 mb-5">
            Project name:
          </label>
          <input
            type="text"
            id="project-name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description:
          </label>
          <input
            type="text"
            id="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="manager" className="block text-sm font-medium text-gray-700 mb-1">
            Manager:
          </label>
          <div className="flex items-center">
            <select
              id="manager"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>--------</option>
            </select>
            <button type="button" className="ml-2 text-gray-500 hover:text-gray-700">

            </button>
            <button type="button" className="ml-2 text-green-600 hover:text-green-700">
                 </button>
            <button type="button" className="ml-2 text-blue-600 hover:text-blue-700">

            </button>
          </div>
        </div>

        <div>
          <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">
            Start date:
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="start-date"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button type="button" className="ml-2 text-gray-500 hover:text-gray-700">

            </button>
          </div>

        </div>

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

            </button>
          </div>

        </div>

        <div>
          <label htmlFor="technology" className="block text-sm font-medium text-gray-700 mb-1">
            Technology:
          </label>
          <input
            type="text"
            id="technology"
            defaultValue=""
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
}
export default AddProject;