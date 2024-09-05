
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

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="px-4 sm:px-10">
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 mt-5">Our Projects</h1>

<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((project, index) => (
            <div key={index} className="relative">
              <Link
                to={`/project/${index}`}>

                <div className="flex flex-col  h-full">
                  <img
                    className="w-full h-48 object-cover  rounded-t-lg"
=======
        <div className=" block grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {data.map((project, index) => (
            <div key={index} className="relative">
              <Link
                to={`/project/${project.id}`}>

                <div className="flex flex-col  h-full">
                  <img
                    className="w-full h-48 object-cover rounded-t-lg fit"
>>>>>>> dev-ritesh
                    src={project.Project_image}
                    alt="Project"
                  />
                  <h2 className="text-lg bg-[#EBE5E5] text-center rounded-b-lg  sm:text-lg font-bold">{project.Project_name}</h2>
                </div>
              </Link>
            </div>
          ))}


          <div className="relative">
            <Link
              to="/add-project"
              className="block p-4 sm:p-6 my-2 text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
              style={{ width: "100%", maxWidth: "250px", height: "350px" }}
            >
              <div className="absolute inset-x-0 top-0 text-center text-xs sm:text-sm font-bold tracking-wider py-2 uppercase bg-black bg-opacity-50 rounded-t-lg">
                ADD PROJECT
              </div>

              <div className="flex justify-center items-center h-full">
                <div className="text-6xl sm:text-9xl">+</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
