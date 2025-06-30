// Typewriter effect
function typeWriter(element, text, delay = 100, loop = false, loopDelay = 2000) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    } else if (loop) {
      // If looping, clear the element and start over after a delay
      setTimeout(() => {
        element.innerHTML = '';
        i = 0;
        type();
      }, loopDelay);
    }
  }
  element.innerHTML = ''; // Clear content before starting
  type();
}

// const titleEl = document.querySelector('.section-title');

// // To make it loop, pass 'true' for the loop parameter
// typeWriter(titleEl, 'Overview', 100, true, 2000); // Loops with a 2-second delay


// Cards animation
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 25;
    const rotateY = ((x - centerX) / centerX) * -25;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, i * 100); // delay each card for cascade effect
      }
    });
  }, {
    threshold: 0.15
  });

  cards.forEach(card => observer.observe(card));
});








// Skills


// Contact
// const eye = document.querySelector('.eye');
// const passwordInput = document.querySelector('input[type="password"]');

// eye.addEventListener('click', () => {
//   const type = passwordInput.type === 'password' ? 'text' : 'password';
//   passwordInput.type = type;
//   eye.textContent = type === 'password' ? '👁️' : '🙈';
// });



// NAVBAR MOBILE
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});




// Overview cards animation pops up
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.animated').forEach(el => {
  observer.observe(el);
});


// form animation
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a staggered delay
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150); // 150ms between each item
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

// Project
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add stagger delay
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  cards.forEach(card => observer.observe(card));
});

// SKills
document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".icon-wrapper");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100); // Stagger delay
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  skills.forEach(skill => observer.observe(skill));
});


let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log("ScrollTop:", scrollTop, "Last:", lastScrollTop);

  if (scrollTop > lastScrollTop) {
    navbar.classList.add("hide");
    console.log("Scrolling down, hide navbar");
  } else {
    navbar.classList.remove("hide");
    console.log("Scrolling up, show navbar");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});