import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Join from './pages/Join';
import ProjectsPage from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-nature-light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
