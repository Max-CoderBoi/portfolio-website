'use client';

import { useEffect, useRef } from 'react';

export  default function SpaceBackground() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create static stars with varied sizes
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${Math.random() * 2 + 2}s`;
      canvas.appendChild(star);
    }

    // Create shooting stars with diagonal tail
    function createShootingStar() {
      if (!canvas) return;
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.left = `${Math.random() * 30 + 70}%`;
      shootingStar.style.top = `${Math.random() * 30}%`;
      const duration = Math.random() * 1.5 + 2;
      shootingStar.style.animation = `shoot ${duration}s ease-out forwards`;
      canvas.appendChild(shootingStar);

      setTimeout(() => {
        shootingStar.remove();
      }, duration * 1000 + 100);
    }

    // Create shooting star every 3-6 seconds
    const shootingInterval = setInterval(() => {
      createShootingStar();
    }, Math.random() * 3000 + 3000);

    // Initial shooting stars
    setTimeout(createShootingStar, 1000);
    setTimeout(createShootingStar, 4000);
    setTimeout(createShootingStar, 7000);

    return () => {
      clearInterval(shootingInterval);
    };
  }, []);

  return (
    <>
      <div 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(255, 100, 50, 0.15), transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(100, 50, 255, 0.15), transparent 50%),
            radial-gradient(ellipse at 40% 70%, rgba(255, 200, 100, 0.1), transparent 50%),
            radial-gradient(ellipse at bottom, #1a1a2e 0%, #0f0f1e 100%)
          `
        }}
      />
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 animate-nebula-shift"
        style={{
          background: `
            radial-gradient(ellipse at 30% 40%, rgba(255, 80, 120, 0.2), transparent 40%),
            radial-gradient(ellipse at 70% 60%, rgba(80, 120, 255, 0.2), transparent 40%),
            radial-gradient(ellipse at 50% 80%, rgba(255, 180, 80, 0.15), transparent 35%)
          `
        }}
      />
      <style jsx>{`
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite ease-in-out;
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
        }

        .shooting-star {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px 4px rgba(255, 255, 255, 0.9);
        }

        .shooting-star::before {
          content: '';
          position: absolute;
          top: -2px;
          right: 4px;
          width: 150px;
          height: 2px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(255, 200, 255, 0.6), transparent);
          transform: rotate(-45deg);
          transform-origin: left center;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </>
  );
}