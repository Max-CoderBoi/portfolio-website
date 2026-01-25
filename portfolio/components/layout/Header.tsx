'use client';

import { personalInfo } from '@/data/portfolio';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export  default  function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
        scrolled ? 'bg-black/85 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(0,212,255,0.8)]"
        >
          <Image
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            fill
            className="object-cover"
          />
        </button>

        <ul className="hidden md:flex gap-12">
          {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-white font-medium text-base transition-colors hover:text-primary group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}