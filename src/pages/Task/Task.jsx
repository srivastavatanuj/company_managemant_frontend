import React, { useState } from 'react'

const Task = () => {
  const[formData, setFormData]= useState ({
TaskName:'',
Assigned:'',
Deadline:'',
Comments:'',
Status:'',

  });
const handleChange = async(e)=>{
await setFormData ({...formData,[e.target.name]: e.target.value});
};
const handleSubmit = async(e) => {
  e.preventDefault();
  const response = await fetch('https://kashishpal123.pythonanywhere.com/contact_us/contact-us/', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  setFormData({
    TaskName:'',
    Assigned:'',
    Deadline:'',
    Comments:'',
    Status:'',
  });
  const result = await response.json();
  console.log(result);
  };



  return (
<div className=" bg-gray-100 p-6 max-w-2xl mx-auto mt-5 mb-5">
      <h1 className="text-2xl font-semibold mb-6 flex justify-center">TASK</h1>
      <form  onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="project-name" className="block text-sm font-medium text-gray-700 mb-5">
            Task Name:
          </label>
          <input
            type="text"
            id="project-name"
            value={formData.Name}
              onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="assign" className="block text-sm font-medium text-gray-700 mb-1">
            Assigned to:
          </label>
          <input
            type="text"
            id="description"
            name="Assigned"
            value={formData.Assigned}
              onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>



        <div>
          <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">
            Deadline:
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="start-date"
              name="Deadline"
              value={formData.Deadline}
                onChange={handleChange}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button type="button" className="ml-2 text-gray-500 hover:text-gray-700">

            </button>
          </div>

        </div>



        <div>
          <label htmlFor="technology" className="block text-sm font-medium text-gray-700 mb-1">
            Comments:
          </label>
          <input
            type="text"
            id="technology"

            defaultValue=""
            className="w-full 2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-28"


          />
<div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1 mt-3">
            Status:
          </label>
          <div className="flex items-center">
            <select

             id="status"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
<option ></option>
              <option>Complete</option>
              <option>Pending</option>
              <option>OverDue</option>
            </select>
            <button type="button" className="ml-2 text-gray-500 hover:text-gray-700">

            </button>
            <button type="button" className="ml-2 text-green-600 hover:text-green-700">
                 </button>
            <button type="button" className="ml-2 text-blue-600 hover:text-blue-700">

            </button>
          </div>
        </div>
<button className='bg-indigo-700 mt-4 mx-60 w-20 h-10 rounded-2xl font-bold'>
SUBMIT
</button>
        </div>
      </form>
    </div>



  )
}

export default Task;
