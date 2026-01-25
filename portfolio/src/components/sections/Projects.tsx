'use client';

import {  projects } from '@/src/data/portfolio';
import { Tilt } from '@/src/components/ui/tilt';
import { Spotlight } from '@/src/components/ui/spotlight';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-20 relative inline-block w-full">
          Featured <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-[0_0_20px_rgba(0,212,255,0.5)]" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Tilt
      rotationFactor={8}
      isRevese
      style={{ transformOrigin: 'center center' }}
      springOptions={{
        stiffness: 26.7,
        damping: 4.1,
        mass: 0.2,
      }}
      className="group relative rounded-3xl"
    >
      <Spotlight
        className="z-10 from-white/50 via-white/20 to-white/10 blur-2xl"
        size={248}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
      />

      <div className="relative bg-bg-card border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-[0_30px_60px_rgba(0,212,255,0.4)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]" />

        <div className="relative w-full h-60 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="relative z-[2] p-8">
          <h3 className="text-2xl font-bold mb-3">
            {project.title}
          </h3>

          <p className="text-text-secondary mb-5 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/30 transition-all hover:bg-primary/20 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,212,255,0.3)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold transition-all hover:gap-4"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold transition-all hover:gap-4"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
}