import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import TechStack from './pages/Skills/TechStack';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
