const typingText = document.querySelector(".typing");
const words = ["Full Stack Web Developer", "E-commerce Platform Engineer", "Freelance Tech Consultant", "Website Optimization & Analytics Strategist"];
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, 1000);
});

