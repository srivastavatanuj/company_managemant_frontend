import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Project = () => {
  const url = "https://kashishpal123.pythonanywhere.com/projects/Listprojects/";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(url);


        if (!res.ok) {
          setLoading(false);
          navigate("/errorpage");
          throw new Error(
            `Failed to fetch employee data, status code: ${res.status}`
          );
        }
        console.log("......", res);
        const json = await res.json();
        setData(json);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchInfo();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
    <div className="px-4 sm:px-10">
      <div className="flex flex-col items-center justify-center my-4 ">
        <h1 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12  ">
          Our Projects
        </h1>

        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
          {data.map((project, index) => (
            <div key={index} className="relative">
              <Link to={`/project/${project.id}`}>
                <div className="flex flex-col  h-full shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
                  <img
                    className="w-full h-48 object-cover rounded-t-lg fit "
                    src={project.Project_image}
                    alt="Project"
                  />
                  <h2 className="text-lg bg-[#EBE5E5] text-center rounded-b-lg  sm:text-lg font-bold">
                    {project.Project_name}
                  </h2>
                </div>
              </Link>
            </div>
          ))}

          <div className="relative  rounded-lg shadow-lg  h-full transform transition hover:scale-105 hover:shadow-2xl "  >
            <Link
              to="/add-project"


            >
              <div className="absolute inset-x-0 top-0 text-white text-center text-xs sm:text-sm font-bold tracking-wider py-2 uppercase bg-black bg-opacity-50 rounded-t-lg">
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
