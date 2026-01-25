'use client';

import { techStack } from '@/data/portfolio';
import Image from 'next/image';

export  default function Skills() {
  // Flatten all tech items for scrolling
  const allTechItems = techStack.flatMap(category => category.items);

  // Create three rows with different items
  const row1 = [...allTechItems.slice(0, 6), ...allTechItems.slice(0, 6)];
  const row2 = [...allTechItems.slice(6, 12), ...allTechItems.slice(6, 12)];
  const row3 = [...allTechItems.slice(12), ...allTechItems.slice(12)];

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-20 relative inline-block w-full">
          Tech <span className="bg-gradient-to-r from-[rgb(0,212,255)] via-[rgb(123,44,191)] to-[rgb(255,0,110)] bg-clip-text text-transparent">Stack</span>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[rgb(0,212,255)] via-[rgb(123,44,191)] to-[rgb(255,0,110)] rounded-full shadow-[0_0_20px_rgba(0,212,255,0.5)]" />
        </h2>

        {/* Scrolling Tech Stack */}
        <div className="space-y-10">
          {/* Row 1 - Scroll Left */}
          <div className="relative">
            <div 
              className="overflow-hidden py-10"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <div className="flex gap-12 animate-scroll-left hover:[animation-play-state:paused]">
                {row1.map((tech, index) => (
                  <TechItem key={`row1-${index}`} tech={tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="relative">
            <div 
              className="overflow-hidden py-10"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <div className="flex gap-12 animate-scroll-right hover:[animation-play-state:paused]">
                {row2.map((tech, index) => (
                  <TechItem key={`row2-${index}`} tech={tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 3 - Scroll Left */}
          <div className="relative">
            <div 
              className="overflow-hidden py-10"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <div className="flex gap-12 animate-scroll-left hover:[animation-play-state:paused]">
                {row3.map((tech, index) => (
                  <TechItem key={`row3-${index}`} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechItem({ tech }: { tech: { name: string; icon: string } }) {
  return (
    <div className="group relative flex flex-col items-center gap-5 min-w-[140px] p-8 bg-white/[0.02] border border-white/5 rounded-3xl transition-all duration-[600ms] cursor-pointer hover:bg-[rgba(0,212,255,0.08)] hover:border-primary hover:-translate-y-4 hover:scale-110 hover:shadow-[0_25px_60px_rgba(0,212,255,0.5)]">
      {/* Shine Effect */}
      <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.15)] to-transparent transition-all duration-[800ms] group-hover:left-full" />
      
      {/* Icon */}
      <div className="relative w-20 h-20 transition-all duration-[600ms] group-hover:scale-125 group-hover:rotate-[8deg]">
        <Image
          src={tech.icon}
          alt={tech.name}
          fill
          className="object-contain drop-shadow-[0_0_10px_rgba(0,212,255,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(0,212,255,0.7)]"
        />
      </div>

      {/* Name */}
      <span className="text-base font-semibold text-center transition-all duration-400 group-hover:text-primary group-hover:-translate-y-1">
        {tech.name}
      </span>
    </div>
  );
}