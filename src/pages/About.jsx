import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
        className="max-w-4xl text-center space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-500">About Me</h2>

        <p className="text-lg leading-relaxed">
          I'm <span className="font-semibold text-purple-400">Sai Sourya</span>, a passionate Full Stack Developer currently pursuing my B.Tech at Alliance University.
          I love building fast, scalable web apps and solving real-world problems using tech.
        </p>

        <p className="text-lg leading-relaxed">
          I work mainly with <span className="text-sky-500 font-medium">React</span>, <span className="text-green-500 font-medium">Node.js</span>, and
          <span className="text-emerald-500 font-medium"> MongoDB</span>. I’m also passionate about 
          <span className="text-pink-400 font-medium"> AI & Machine Learning</span> and often experiment with LLMs and open source projects.
        </p>

        <p className="text-lg leading-relaxed">
          Outside of coding, I enjoy exploring new tech trends, mentoring juniors, and building products that make an impact. 💻
        </p>

        {/* 🔗 Social Links */}
        <div className="flex justify-center gap-6 pt-6 text-2xl">
          <a
            href="mailto:saisourya678@gmail.com"
            className="hover:text-red-500 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/sourya-6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 dark:hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sai-sourya-pusala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
