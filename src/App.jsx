import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Join from './pages/Join';
import ProjectsPage from './pages/Projects';

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
        <Route path="/RewildingRestoration/" element={<Home />} />
        <Route path="/RewildingRestoration/projects" element={<ProjectsPage />} />
        <Route path="/RewildingRestoration/about" element={<About />} />
        <Route path="/RewildingRestoration/contact" element={<Contact />} />
        <Route path="/RewildingRestoration/join" element={<Join />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
