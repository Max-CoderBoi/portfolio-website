import { Hero } from '@/src/components/sections/Hero';
import { Skills } from '@/src/components/sections/Skills';
import { Projects } from '@/src/components/sections/Projects';
import { Contact } from '@/src/components/sections/Contact';

export  function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}