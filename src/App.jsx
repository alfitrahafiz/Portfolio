import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import SkillList from "./pages/Skills/SkillList";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <SkillList />
      <Contact />
    </>
  );
}

export default App;
