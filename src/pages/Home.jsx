import { Parallax } from 'react-parallax';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <Parallax bgImage="/assets/bg-hero.jpg" strength={500}>
      <div className="h-screen w-full flex items-center justify-center relative px-4">
        {/* 🔳 Dark/light mode-aware overlay */}
        <div className="absolute inset-0 z-0 backdrop-blur-md transition-colors duration-300
          bg-gradient-to-br
          from-white/80 via-white/70 to-white/90
          dark:from-black/80 dark:via-black/70 dark:to-black/90
        " />

        {/* 🧑‍💻 Content Wrapper */}
        <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl w-full">
          {/* 👤 Your Photo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="https://res.cloudinary.com/dftzw1p6x/image/upload/v1750350786/Sourya_Profie_m7mjzq.jpg"
            alt="Sai Sourya"
            className="w-40 h-40 md:w-64 md:h-64 rounded-full object-center border-4 border-purple-500 shadow-lg"
          />

          {/* 📝 Text Content */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-md"
            >
              Hey, I'm <span className="text-purple-500">Sai Sourya</span> 👋
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-medium"
            >
              <Typewriter
                words={[
                  'Full Stack Developer',
                  'AI Enthusiast',
                  'Open Source Contributor',
                  'React & Node.js Expert',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Home;
