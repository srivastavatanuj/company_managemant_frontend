import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Project = () => {
  const url = "https://kashishpal123.pythonanywhere.com/projects/Listprojects/";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 mt-5">
          Our Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((project, index) => (
            <div key={index} className="relative">
              <Link to={`/project/${index}`}>
                <div className="flex flex-col  h-full">
                  <img
                    className="w-full h-48 object-cover  rounded-t-lg"
                    src={project.Project_image}
                    alt="Project"
                  />
                  <h2 className="text-lg bg-[#EBE5E5] text-center rounded-b-lg sm:text-lg font-bold">
                    {project.Project_name}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
