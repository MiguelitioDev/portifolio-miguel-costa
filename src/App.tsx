import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Only enable Lenis smooth scrolling if pointer is fine (desktop mouse) and no reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchOnly = window.matchMedia('(pointer: coarse)').matches;

    if (prefersReducedMotion || isTouchOnly) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <InteractiveBackground />
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
