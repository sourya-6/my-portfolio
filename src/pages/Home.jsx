import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown, DownloadCloud } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Home = () => {
  // initialize tsParticles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Parallax bgImage="/assets/bg-hero.jpg" strength={600}>
      <div className="relative h-screen w-full flex items-center justify-center px-6 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
        
        {/* 🌌 Particles Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: 'transparent' } },
            particles: {
              number: { value: 50 },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 1 },
              opacity: { value: 0.5 }
            }
          }}
          className="absolute inset-0 z-0"
        />

        {/* 🌫 Overlay for blur/depth */}
        <div className="absolute inset-0 z-10 backdrop-blur-md bg-gradient-to-br from-white/80 via-white/60 to-white/80 dark:from-black/80 dark:via-black/70 dark:to-black/90" />

        {/* 🎯 Main Content */}
        <div className="relative z-20 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full text-center md:text-left">
          
          {/* 🖼 Gradient Border Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="p-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg"
          >
            <img
              src="https://res.cloudinary.com/dftzw1p6x/image/upload/v1750350786/Sourya_Profie_m7mjzq.jpg"
              alt="Sai Sourya"
              className="w-40 h-40 md:w-64 md:h-64 rounded-full object-center border-4 border-white dark:border-gray-900"
            />
          </motion.div>

          {/* 📝 Text & Button */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg"
            >
              Hey, I'm <span className="text-purple-600 dark:text-purple-400">Sai Sourya</span> 👋
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-medium max-w-xl"
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

            {/* 📄 Resume Download Button */}
            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <DownloadCloud size={20} /> Download Resume
            </motion.a>
          </div>
        </div>

        {/* ⬇ Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            className="text-purple-500 dark:text-purple-400"
          >
            <ChevronDown size={28} />
          </motion.div>
        </div>
      </div>
    </Parallax>
  );
};

export default Home;
