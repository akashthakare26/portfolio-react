import { personalInfo } from '../data/portfolioData';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '../styles/global.css';

function App() {
  return (
    <div className="app">
      <Header name={personalInfo.name} />
      <main>
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        <Projects />
        <Skills />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer />
    </div>
  );
}

export default App;