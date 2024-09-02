import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const url = "https://kashishpal123.pythonanywhere.com/projects/Listprojects/";
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-12">Our Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((project, index) => (
            <div key={index} className="relative">
              <Link
                to={`/project/${index}`}
                className="block p-6 my-2 text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
                style={{ width: "250px", height: "350px" }}
              >
                <div className="absolute inset-x-0 top-0 text-center text-sm font-bold tracking-wider py-2 uppercase bg-black bg-opacity-50 rounded-t-lg">
                  {`Project ${index + 1}`}
                </div>

                <div className="flex flex-col justify-center h-full">
                  <img
                    className="w-20 h-22"
                    src={project.Project_image}
                    alt="img"
                  />
                  <h2 className="text-2xl font-bold mb-4">
                    {project.Project_name}
                  </h2>
                  <h3 className="text-sm opacity-75">Project Description</h3>
                  <p className="text-sm opacity-75">{project.Description}</p>
                </div>
              </Link>
            </div>
          ))}


          <div className="relative">
          <Link
  to="/add-project"
  className="block p-6 my-2 text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
  style={{ width: "250px", height: "350px" }}
>
  <div className="absolute inset-x-0 top-0 text-center text-sm font-bold tracking-wider py-2 uppercase bg-black bg-opacity-50 rounded-t-lg">ADD PROJECT

  </div>

  <div className="flex justify-center items-center h-full">
    <div className="text-9xl">+</div>
  </div>
</Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
