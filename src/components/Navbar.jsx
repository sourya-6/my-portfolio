import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow dark:bg-gray-900 dark:text-white">
      <h1 className="text-xl font-bold">Sai Sourya</h1>
      <div className="flex items-center gap-4">
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
