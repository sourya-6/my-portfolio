import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 bg-gray-50 dark:bg-black dark:text-white transition-colors duration-500"
    >
      {/* 💎 Fancy Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
        >
          Projects
        </motion.h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">
          A collection of my best work across web, AI, and open-source.
        </p>
        <div className="mt-4 h-1 w-20 mx-auto bg-purple-500 rounded-full" />
      </div>

      {/* 🧩 Project Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
