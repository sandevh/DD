import { motion } from "framer-motion";
import projectData from "../data/projects.json";
import ProjectCard from "../components/PorjectCard";

const Projects = () => {
  const projects = projectData;

  return (
    <section className="min-h-screen bg-gradient-to-br from-maroon-primary to-maroon-secondary text-white font-montserrat pt-24 sm:pt-32 pb-16 px-4 sm:px-6 md:px-10 flex flex-col items-center">
      <motion.div
        className="text-center max-w-4xl mb-12 sm:mb-16 px-2 sm:px-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg leading-tight mb-4">
          OUR PROJECTS
        </motion.h1>
        <motion.p className="text-base sm:text-lg md:text-xl font-bold text-white/90 max-w-3xl mx-auto tracking-wide">
          Trends fade, but revolutions create lasting impact. We don't just
          follow design trends—we ignite innovation, crafting timeless,
          game-changing solutions that set new standards and inspire the future.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
