import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/projects/Projects';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;