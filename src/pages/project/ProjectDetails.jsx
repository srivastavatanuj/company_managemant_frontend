

import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
console.log("ritesh", id)

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`https://kashishpal123.pythonanywhere.com/projects/retrieve-projects/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch project data, status code: ${response.status}`);
                }
                const data = await response.json();
                setProject(data);


            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) {
        return <p className="text-center mt-4">Loading...</p>;
    }

    if (error) {
        return <p className="text-center mt-4 text-red-500">Error: {error}</p>;
    }

    if (!project) {
        return <p className="text-center mt-4">Project not found or does not exist</p>;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white text-center py-4">
                <h1 className="text-3xl font-bold">Project Details</h1>
            </div>
            <div className="p-6">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">{project.Project_name}</h2>
                        <p className="mb-4">
                            <strong>Start Date:</strong> {project.Start_date}
                        </p>
                        <p className="mb-4">
                            <strong>Deadline:</strong> {project.Deadline}
                        </p>
                        <p className="mb-4">
                            <strong>Manager:</strong> {project.Manager}
                        </p>
<p className="mb-4">
<strong>Technology:</strong> {project.Technology}

</p>

                    </div>
                    <div className="flex justify-center md:w-1/2">
                        <img
                            src={project.Project_image}
                            alt="Project Illustration"
                            className="rounded-lg shadow-md w-96 h-56 bg-slate-600"
                        />
                    </div>
                </div>

                <h3 className="text-xl font-semibold text-center mt-6">Description</h3>
                <p className="mt-2 w-auto text-center">{project.Description}</p>
            </div>
        </div>
    );
}

export default ProjectDetails;


