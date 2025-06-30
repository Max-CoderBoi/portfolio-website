document.addEventListener("DOMContentLoaded", () => {
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
});


document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.dataset.modal;
    document.getElementById(modalId).style.display = 'flex';
  });
});

document.querySelectorAll('.modal .close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});
