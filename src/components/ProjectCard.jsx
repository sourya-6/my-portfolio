import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, tech, github, live, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="text-blue-600 flex items-center gap-1 hover:underline">
              <ExternalLink size={16} /> Live
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="text-gray-800 dark:text-white flex items-center gap-1 hover:underline">
              <Github size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
