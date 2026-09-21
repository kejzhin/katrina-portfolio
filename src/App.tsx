import { motion, useScroll } from 'motion/react';
import { Navbar, Hero } from './components/NavbarAndHero';
import { PortfolioSections } from './components/PortfolioSections';
import { BackgroundEffects } from './components/BackgroundEffects';

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <BackgroundEffects />
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
      <Navbar />
      <Hero />
      <PortfolioSections />
    </>
  );
}
