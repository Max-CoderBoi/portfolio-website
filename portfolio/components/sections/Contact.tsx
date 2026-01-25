'use client';

import { personalInfo } from '@/data/portfolio';
import { Mail, Download } from 'lucide-react';

export default  function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 relative inline-block w-full">
          Let's Build <span className="bg-gradient-to-r from-[rgb(0,212,255)] via-[rgb(123,44,191)] to-[rgb(255,0,110)] bg-clip-text text-transparent">Something Amazing</span>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[rgb(0,212,255)] via-[rgb(123,44,191)] to-[rgb(255,0,110)] rounded-full shadow-[0_0_20px_rgba(0,212,255,0.5)]" />
        </h2>

        <p className="text-lg md:text-xl text-text-secondary mb-12 leading-relaxed mt-12">
          Always looking to collaborate on innovative GenAI projects and push the boundaries of what agentic AI can do.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Primary Button */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(123,44,191)] text-white overflow-hidden transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,212,255,0.5)]"
          >
            <span className="absolute inset-0 bg-white/20 scale-0 rounded-full transition-transform duration-600 group-hover:scale-[300%]" />
            <Mail className="relative z-10 w-6 h-6" />
            <span className="relative z-10">Get in Touch</span>
          </a>

          {/* Secondary Button */}
          <a
            href={personalInfo.resume}
            download
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg bg-transparent text-text-primary border-2 border-primary overflow-hidden transition-all hover:bg-primary hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,212,255,0.3)]"
          >
            <span className="absolute inset-0 bg-white/20 scale-0 rounded-full transition-transform duration-600 group-hover:scale-[300%]" />
            <Download className="relative z-10 w-6 h-6" />
            <span className="relative z-10">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}