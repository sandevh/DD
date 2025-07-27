import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <motion.div
      className="relative group overflow-hidden rounded-3xl shadow-lg"
      initial={{ opacity: 0, y: 80, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 120,
      }}
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={project.mainImage}
        alt={project.title}
        className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl backdrop-blur-sm bg-white/30 border border-white/40 shadow-inner">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate();
          }}
          className="px-5 py-2 text-white text-sm sm:text-base bg-maroon-primary rounded-full hover:bg-maroon-secondary hover:cursor-pointer transition font-bold"
        >
          See More
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
