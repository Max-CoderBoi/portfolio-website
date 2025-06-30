document.addEventListener("DOMContentLoaded", function() {
  const typedText = document.getElementById("typed");
  const words = ["Akash Patil", "a Full-Stack Developer", "a DevOps Engineer"];
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = "";
  let isDeleting = false;

  function type() {
    if (wordIndex >= words.length) wordIndex = 0;
    currentWord = words[wordIndex];

    if (isDeleting) {
      typedText.textContent = currentWord.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        wordIndex++;
        setTimeout(type, 400);
        return;
      }
    } else {
      typedText.textContent = currentWord.substring(0, charIndex++);
      if (charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
      }
    }
    setTimeout(type, isDeleting ? 80 : 120);
  }
  type();
});
