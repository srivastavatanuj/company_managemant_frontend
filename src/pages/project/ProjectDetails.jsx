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
    <div className="max-w-9xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden  ">
      <div className="bg-purple-600 text-white text-center py-4 ">
        <h1 className="text-3xl font-bold">{project.Project_name}</h1>
      </div>
      <div className="p-12 md:p-20 text-2xl">
  <div className="flex flex-col md:flex-row md:justify-between">
    <div className="md:w-1/2 my-3.5 md:mr-10">
      <h2 className="text-6xl font-bold mb-4 flex justify-center md:text-left">{project.Project_name}</h2>
      <table className="w-full h-60 mt-7 ml-20 md:ml-0">
        <tr>
          <th className="text-xl font-bold">Start Date:</th>
          <td className="text-lg">{project.Start_date}</td>
        </tr>
        <tr>
          <th className="text-xl font-bold w-1/2">Deadline:</th>
          <td className="text-lg w-1/2">{project.Deadline}</td>
        </tr>
        <tr>
          <th className="text-xl font-bold w-1/2">Manager:</th>
          <td className="text-lg w-1/2">{project.Manager}</td>
        </tr>
        <tr>
          <th className="text-xl font-bold w-1/2">Technology:</th>
          <td className="text-lg w-1/2">{project.Technology}</td>
        </tr>
      </table>
    </div>
    <div className="flex justify-center md:w-1/2 md:ml-10">
      <img
        src={project.Project_image}
        alt="Project Img"
        className="rounded-lg shadow-md h-96 w-2/3 md:w-full"
      />
    </div>
  </div>
  <h3 className="text-3xl font-semibold text-center mt-6">Description</h3>
  <p className="text-xl mt-2 w-auto text-center">{project.Description}</p>
  <div className="font-medium text-5xl py-5">Team Members</div>
  <div>
    {teamMembers.map((emp, index) => (
      <div
        key={index}
        className="flex border rounded-lg shadow-lg py-5 mb-5 bg-gray-100 md:w-full"
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
