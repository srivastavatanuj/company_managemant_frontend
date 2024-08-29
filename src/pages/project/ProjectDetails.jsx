import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  return (

    <div>
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-4">Devine</h1>
      <p className="text-lg text-gray-700 text-center mb-4">
        Devine is a project aimed at exploring the intersection of technology and spirituality, bringing a sense of divine connection through digital experiences.
      </p>
      <h2 className="text-2xl font-semibold text-center text-purple-600 mb-2">Who's Working On It?</h2>
      <ul className="text-lg text-gray-600 text-center">
        <li>Prakhar - Lead Developer{id}</li>
        <li>Sameer/Shashank/Deeksha - UX/UI Designer</li>
        <li> Prakhar- Backend Engineer</li>
      </ul>
    </div>


      {/* <h1>Project Details for Project {id}</h1> */}

    </div>

  );
};

export default ProjectDetails;