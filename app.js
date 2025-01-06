const closeIcon = document.querySelector("#close");
const showPopup = document.querySelector("#popup");
const aboutButton = document.querySelector("#about");

aboutButton.addEventListener("click", () => {
  showPopup.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  showPopup.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  const latestButton = document.querySelector("#latest");
  if (latestButton) {
    latestButton.addEventListener("click", function () {
      const sections = document.querySelectorAll("section.hidden");
      if (sections.length > 0) {
        const firstSection = sections[0];

        // Remove "hidden" from all sections first
        sections.forEach((section) => {
          section.classList.remove("hidden");
        });

        // Scroll to the first section
        setTimeout(() => {
          firstSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 50);
      } else {
        console.error("No hidden sections found.");
      }
    });
  }
});

document.querySelector(".logo").addEventListener("click", () => {
  const sections = document.querySelectorAll("section"); // Select all <section> elements
  if (sections.length > 0) {
    sections[0].scrollIntoView({ behavior: "smooth" }); // Scroll to the first section smoothly
  } else {
    console.error("No sections found on the page.");
  }
});

// const html = document.documentElement;
// const sunIcon = document.getElementById("sun-icon");
// const moonIcon = document.getElementById("moon-icon");

// // Ensure the site starts in dark mode by default
// html.classList.add("dark");
// sunIcon.classList.add("block");
// sunIcon.classList.remove("hidden");
// moonIcon.classList.add("hidden");
// moonIcon.classList.remove("block");

// function toggleTheme(mode) {
//   if (mode === "light") {
//     // Switch to light mode
//     html.classList.remove("dark");
//     sunIcon.classList.add("hidden");
//     sunIcon.classList.remove("block");
//     moonIcon.classList.add("block");
//     moonIcon.classList.remove("hidden");
//   } else if (mode === "dark") {
//     // Switch to dark mode
//     html.classList.add("dark");
//     moonIcon.classList.add("hidden");
//     moonIcon.classList.remove("block");
//     sunIcon.classList.add("block");
//     sunIcon.classList.remove("hidden");
//   }
// }

// // Add event listeners to both icons
// sunIcon.addEventListener("click", () => {
//   toggleTheme("light"); // Switch to light mode when sun icon is clicked
// });

// moonIcon.addEventListener("click", () => {
//   toggleTheme("dark"); // Switch to dark mode when moon icon is clicked
// });

const html = document.documentElement;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const particlesContainer = document.getElementById("particles-js");

// Ensure the site starts in dark mode by default
html.classList.add("dark");
sunIcon.classList.add("block");
sunIcon.classList.remove("hidden");
moonIcon.classList.add("hidden");
moonIcon.classList.remove("block");

// Function to enable particles effect
function enableParticles() {
  particlesContainer.classList.remove("hidden");
  particlesJS.load("particles-js", "config/particlesjs-config.json", function () {
    console.log("Particles.js config loaded");
  });
}

// Function to disable (or hide) particles effect
function disableParticles() {
  particlesContainer.classList.add("hidden");
}

// Function to toggle theme and manage particles effect
function toggleTheme(mode) {
  if (mode === "light") {
    // Switch to light mode
    html.classList.remove("dark");
    sunIcon.classList.add("hidden");
    sunIcon.classList.remove("block");
    moonIcon.classList.add("block");
    moonIcon.classList.remove("hidden");

    // Enable particles effect in light mode
    enableParticles();
  } else if (mode === "dark") {
    // Switch to dark mode
    html.classList.add("dark");
    moonIcon.classList.add("hidden");
    moonIcon.classList.remove("block");
    sunIcon.classList.add("block");
    sunIcon.classList.remove("hidden");

    // Disable particles effect in dark mode
    disableParticles();
  }
}

// Add event listeners to both icons
sunIcon.addEventListener("click", () => {
  toggleTheme("light"); // Switch to light mode when sun icon is clicked
});

moonIcon.addEventListener("click", () => {
  toggleTheme("dark"); // Switch to dark mode when moon icon is clicked
});

// Initialize particles only if the site starts in light mode
if (!html.classList.contains("dark")) {
  enableParticles();
} else {
  disableParticles();
}


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 80) * (canvas.width / 80),
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// Create particle
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  // Method to draw individual particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = "#910A67";
    ctx.fill();
  }

  // Update particle position
  update() {
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }

    // Collision detection with mouse
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }

    // Move particle
    this.x += this.directionX;
    this.y += this.directionY;

    // Draw particle
    this.draw();
  }
}

// Create particle array
function init() {
  particlesArray = [];
  let numberOfParticles = (canvas.height * canvas.width) / 9000;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 5 + 1;
    let x = Math.random() * (canvas.width - size * 2) + size * 2;
    let y = Math.random() * (canvas.height - size * 2) + size * 2;
    let directionX = Math.random() * 5 - 2.5;
    let directionY = Math.random() * 5 - 2.5;
    let color = "#910A67";

    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

// Animate loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
}

function connect() {
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = 0; b < particlesArray.length; b++) {
      let distance =
        (particlesArray[a].x - particlesArray[b].x) ** 2 +
        (particlesArray[a].y - particlesArray[b].y) ** 2;

      if (distance < (canvas.width / 7) * (canvas.height / 7)) {
        ctx.strokeStyle = "rgba(238,238,238, 1)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

init();
animate();


particlesJS.load('particles-js', 'config/particlesjs-config.json', function() {
  console.log('Particles.js config loaded');
});
