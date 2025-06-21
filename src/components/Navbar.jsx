import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center shadow-sm border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md dark:text-white">
      {/* 🧑 Name/Logo */}
      <h1 className="text-xl md:text-2xl font-bold tracking-tight">Sai Sourya</h1>

      {/* 🔗 Navigation Links */}
      <div className="flex items-center gap-4 text-sm md:text-base">
        <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
        <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
