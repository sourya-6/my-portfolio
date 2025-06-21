import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div > {/* ✅ fixes navbar overlapping Home */}
        <Home />
        <Projects />
        <About />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
