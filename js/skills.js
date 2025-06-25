
  // document.addEventListener("DOMContentLoaded", () => {
  //   const cards = document.querySelectorAll(".skill-card");

  //   // Fade-in cards one by one
  //   cards.forEach((card, index) => {
  //     setTimeout(() => {
  //       card.style.opacity = 1;
  //     }, index * 150);
  //   });

  //   // Subtle floating animation using JS for a small 3D parallax effect on mouse move
  //   const container = document.querySelector('.skills-stack');

  //   container.addEventListener('mousemove', (e) => {
  //     const rect = container.getBoundingClientRect();
  //     const x = e.clientX - rect.left - rect.width / 2;
  //     const y = e.clientY - rect.top - rect.height / 2;

  //     cards.forEach((card, i) => {
  //       const movement = (i + 1) * 2; // different movement per card
  //       card.style.transform = `translateZ(${movement * 5}px) translateX(${x * 0.03 * movement}px) translateY(${y * 0.02 * movement}px) scale(1)`;
  //     });
  //   });

  //   // Reset position on mouse leave
  //   container.addEventListener('mouseleave', () => {
  //     cards.forEach((card) => {
  //       card.style.transform = '';
  //     });
  //   });

  //   // On hover, elevate the card on top (z-index)
  //   cards.forEach(card => {
  //     card.addEventListener('mouseenter', () => {
  //       card.style.zIndex = 1000;
  //     });
  //     card.addEventListener('mouseleave', () => {
  //       // reset zIndex based on nth-child again
  //       const index = Array.from(cards).indexOf(card);
  //       card.style.zIndex = 12 - index;
  //     });
  //   });
  // });

