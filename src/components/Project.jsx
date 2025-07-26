import { Link, useParams } from "react-router-dom";
import projectData from "../data/projects.json";

const Project = () => {
  const { slug } = useParams();
  const project = projectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <div className="p-8 text-center text-red-600 font-montserrat text-xl font-semibold">
        Project not found
      </div>
    );
  }

  return (
    <div className="font-montserrat bg-white-primary text-black min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <img
        src={"/" + project.mainImage}
        alt={project.title}
        className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-b-3xl shadow-md"
      />

      <div className="max-w-5xl mx-auto py-12 space-y-10">
        <div className="space-y-2 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-maroon-primary drop-shadow-sm">
            {project.title}
          </h1>
          <h2 className="text-lg sm:text-2xl font-semibold text-maroon-secondary italic tracking-wide">
            {project.subTitle}
          </h2>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-gray-800 font-medium max-w-4xl mx-auto sm:mx-0">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 text-base max-w-4xl mx-auto sm:mx-0">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-maroon-primary mb-1">
                Client
              </h3>
              <p className="text-gray-700">{project.client}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-maroon-primary mb-1">
                Project
              </h3>
              <p className="text-gray-700">{project.Project}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-maroon-primary mb-1">
                Website
              </h3>
              <a
                href={project.Website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon-secondary underline hover:text-maroon-primary transition font-semibold break-all"
              >
                {project.Website}
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-maroon-primary mb-1">
                Client Problem
              </h3>
              <p className="text-gray-700">{project.clientProblem}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-maroon-primary mb-1">
                Our Solution
              </h3>
              <p className="text-gray-700">{project.ourSolution}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center sm:text-left">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 bg-maroon-primary text-white-primary rounded-full font-bold hover:bg-maroon-secondary transition duration-300 shadow-lg"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
