import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg bg-white flex flex-col"
      initial={{ opacity: 0, y: 80, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 120,
      }}
      whileHover={{ y: -10, scale: 1.03 }}
    >
      <img
        src={project.mainImage}
        alt={project.title}
        className="w-full h-40 sm:h-52 md:h-64 object-cover rounded-t-3xl"
      />

      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-extrabold text-maroon-primary mb-1 sm:mb-2">
          {project.title}
        </h3>
        <p className="text-maroon-secondary font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
          {project.subTitle}
        </p>
        <p className="text-gray-700 text-xs sm:text-sm mb-4 line-clamp-4 flex-grow">
          {project.description}
        </p>

        <button
          onClick={() =>
            navigate(
              `/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`
            )
          }
          className="mt-auto inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-maroon-primary text-white rounded-full hover:bg-maroon-secondary transition"
        >
          View Project
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
