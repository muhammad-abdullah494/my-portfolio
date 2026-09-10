import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AIAssistantTeaser from '../components/AIAssistantTeaser';
import SelectedWork from '../components/SelectedWork';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 text-text-primary selection:bg-accent-500/30 selection:text-white">
      <Navbar />
      
      <Hero />
      <AIAssistantTeaser />
      <SelectedWork />
      
      <About />
      <Experience />
      <Skills />
      <Education />
      
      <Contact />
      <Footer />
    </main>
  );
}