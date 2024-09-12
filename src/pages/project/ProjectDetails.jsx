import { useState, useEffect } from "react";
import { Form, useParams } from "react-router-dom";
import Project from "./Project";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [teamMembers, setTeamMembers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEmpId, setSelectedEmpId] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `https://kashishpal123.pythonanywhere.com/projects/retrieve-projects/${id}/`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch project data, status code: ${response.status}`
          );
        }
        const data = await response.json();
        setProject(data.project);
        setTeamMembers(data.Team_members);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  console.log(teamMembers);
  const handleSelectChange = (e) => {
    setSelectedEmpId(e.target.value);
  };

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-4 text-red-500">Error: {error}</p>;
  }

  if (!project) {
    return (
      <p className="text-center mt-4">Project not found or does not exist</p>
    );
  }

  return (
    <div className="max-w-9xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 ">
      <div className="bg-purple-600 text-white text-center py-4">
        <h1 className="text-3xl font-bold">{project.Project_name}</h1>
      </div>
      <div className="p-12 text-2xl  ">
        <div className="flex flex-col md:flex-row  ">
          <div className="md:w-1/2 my-7 ">
            <h2 className="text-7xl font-bold mb-4 flex justify-center">
              {project.Project_name}
            </h2>
            <p className="flex justify-center my-6 ">
              <strong>Start Date:</strong> {project.Start_date}
            </p>

            <p className=" flex justify-center my-6  ">
              <strong>Deadline:</strong> {project.Deadline}
            </p>
            <p className=" flex justify-center my-6  ">
              <strong>Manager:</strong> {project.Manager}
            </p>

            <p className="flex justify-center my-6">
              <strong>Technology:</strong> {project.Technology}
            </p>
          </div>
          <div className="flex justify-center md:w-1/2">
            <img
              src={project.Project_image}
              alt="Project Img"
              className="rounded-lg shadow-md h-96 w-2/3"
            />
          </div>
        </div>

        <h3 className="text-3xl font-semibold text-center mt-6">Description</h3>
        <p className=" text-xl mt-2 w-auto text-center">
          {project.Description}
        </p>
        <div className="font-medium  text-5xl py-5">Team Members</div>
        {/*
        <table className="w-full border-collapse">
  <thead>
    <tr>
      <th className="border px-4 py-2">Emp Id </th>
      <th className="border px-4 py-2">Name</th>
    </tr>
  </thead>
  <tbody>
    {teamMembers.map((emp, index) => (
      <tr key={index}>
        <td className="border px-4 py-2 text-center">{emp.Emp_id}</td>
        <td className="border px-4 py-2 text-center">{emp.name}</td>
      </tr>
    ))}
  </tbody>
</table> */}
        <div>
          {" "}
          {teamMembers.map((emp, index) => (
            <div
              key={index}
              className="flex border rounded-lg shadow-lg py-5 mb-5 bg-gray-100"
            >
              <span className="font-bold ml-5">{index + 1}.</span>
              <div className="flex justify-between w-full px-5 items-center">
                <span>{emp.name}</span>
                <span className="text-gray-500 text-right text-base italic">{emp.Emp_id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
