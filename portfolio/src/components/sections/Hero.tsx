'use client';

import { personalInfo, ROBOT_SCENE_URL } from '@/src/data/portfolio';
import { InteractiveRobotSpline } from '@/src/components/ui/interactive-3d-robot';
import { Mail, Linkedin, Github, Code } from 'lucide-react';

export function Hero() {
  const socialLinks = [
    { icon: Mail, href: `mailto:${personalInfo.email}`, color: '#ea4335', label: 'Email' },
    { icon: Linkedin, href: personalInfo.social.linkedin, color: '#0077b5', label: 'LinkedIn' },
    { icon: Github, href: personalInfo.social.github, color: '#ffffff', label: 'GitHub' },
    { icon: Code, href: personalInfo.social.leetcode, color: '#ffa116', label: 'LeetCode' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Robot Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-block bg-primary/10 border border-primary text-primary px-5 py-2 rounded-full text-sm font-semibold mb-8 animate-glow-pulse">
            {personalInfo.badge}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight animate-[fadeInUp_1s_ease-out]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">
              {personalInfo.name}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-8 animate-[fadeInUp_1s_ease-out_0.2s_both]">
            {personalInfo.title}
          </p>

          {/* Bio */}
          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-10 max-w-3xl animate-[fadeInUp_1s_ease-out_0.4s_both]">
            {personalInfo.bio}
          </p>

          {/* Social Links */}
          <div className="flex gap-6 animate-[fadeInUp_1s_ease-out_0.6s_both]">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.icon !== Mail ? '_blank' : undefined}
                rel={link.icon !== Mail ? 'noopener noreferrer' : undefined}
                className="group relative w-16 h-16 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center transition-all duration-400 hover:border-transparent hover:-translate-y-2 hover:scale-110"
                aria-label={link.label}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <link.icon 
                  className="relative z-10 w-7 h-7 transition-colors"
                  style={{ color: link.color }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}