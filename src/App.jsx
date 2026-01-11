import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-nature-light">
      <Hero />
      <Projects />

      <footer className="bg-nature-dark py-8 text-center text-nature-light/60">
        <p>&copy; {new Date().getFullYear()} Rewilding Restoration. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
