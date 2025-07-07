import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, tech, github, live, image }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-purple-700/30 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col"
    >
      {/* 🔥 Image with zoom effect */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* 📄 Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-grow">
          {description}
        </p>

        {/* 💻 Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs font-medium bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 🔗 Links */}
        <div className="flex gap-4 mt-auto">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 dark:text-white flex items-center gap-1 hover:underline"
            >
              <Github size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
