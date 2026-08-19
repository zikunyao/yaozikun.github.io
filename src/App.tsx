import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchFocus from './components/ResearchFocus';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ResearchFocus />
        <About />
        <Projects />
        <Publications />
        <Skills />
        <CVSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
