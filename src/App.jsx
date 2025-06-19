import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
