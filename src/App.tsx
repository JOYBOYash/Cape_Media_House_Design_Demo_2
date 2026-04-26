import React from 'react';
import { ReactLenis } from 'lenis/react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionStatement from './components/MissionStatement';
import Superpowers from './components/Superpowers';
import ScrollingMarquee from './components/ScrollingMarquee';
import ProjectsGallery from './components/ProjectsGallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.03, wheelMultiplier: 0.8, smoothWheel: true }}>
      <div className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-background flex flex-col">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <MissionStatement />
          <Superpowers />
          <ScrollingMarquee />
          <ProjectsGallery />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
