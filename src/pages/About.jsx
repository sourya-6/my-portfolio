import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Docker",
  "MySQL",
  "Python",
  "Java",
  "C++",
  
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-white dark:bg-black text-gray-800 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full text-center space-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-500">About Me</h2>

        <p className="text-lg leading-relaxed">
          I'm <span className="font-semibold text-purple-400">Sai Sourya</span>, a Full Stack MERN Developer  pursuing B.Tech at Alliance University.
          I build powerful web applications using modern tech stacks and love exploring Machine Learning, LLMs, and automation.
        </p>

        {/* ✅ Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">🛠️ Skills I’ve Learned</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-1 text-sm rounded-full font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 🔗 Socials */}
        <div className="flex justify-center gap-6 pt-8 text-2xl">
          <a href="mailto:saisouryaofficial@gmail.com" className="hover:text-red-500 transition" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/saisourya" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/saisourya" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
