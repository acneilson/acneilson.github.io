import './css/main.css';
import Hero from './sections/hero';
import About from './sections/about';
import Skills from './sections/skills';
import Experience from './sections/experience';
import Projects from './sections/projects';
import Philosophy from './sections/philosophy';
import Education from './sections/education';
import Contact from './sections/contact';

function App() {
  return (
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Philosophy />
        <Education />
        <Contact />
      </main>
  );
}

export default App;
