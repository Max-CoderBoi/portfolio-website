// Typing Animation
document.addEventListener('DOMContentLoaded', function() {
  const typedTextSpan = document.querySelector('.typed-text');
  const textArray = ["Akash Patil", "a Developer", "a Problem Solver"];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 1000;
  let textArrayIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if(textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }
  
  // Start animation
  setTimeout(type, 1000);
  
  // Smooth scroll for navigation
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.background = 'rgba(30, 30, 30, 0.95)';
    } else {
      header.style.background = 'rgba(30, 30, 30, 0.9)';
    }
  });
});