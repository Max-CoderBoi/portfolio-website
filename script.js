document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     Typing Effect in Hero Section
  =============================== */
  const typedTextSpan = document.querySelector(".typed-text");
  const textArray = ["Akash Patil"];
  const typingDelay = 150;
  const erasingDelay = 100;
  const newTextDelay = 2000;
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
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  }

  type();

  /* ===============================
     Extra Smooth Scroll for Nav Links
  =============================== */
  function smoothScrollTo(target, duration = 1200, offset = 70) {
    const start = window.scrollY;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementPosition - offset;
    const distance = targetPosition - start;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      // Ease-in-out cubic function
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      };

      const run = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }

  // Attach smooth scroll to all nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        smoothScrollTo(target, 1200, 70); // 1200ms for smoother effect
      }
    });
  });
});

/* ===============================
   Project Modal Open/Close
=============================== */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.dataset.modal;
    document.getElementById(modalId).style.display = "flex";
  });
});

document.querySelectorAll(".modal .close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
