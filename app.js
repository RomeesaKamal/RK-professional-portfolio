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

document.querySelector('.logo').addEventListener('click', () => {
  const sections = document.querySelectorAll('section'); // Select all <section> elements
  if (sections.length > 0) {
    sections[0].scrollIntoView({ behavior: 'smooth' }); // Scroll to the first section smoothly
  } else {
    console.error('No sections found on the page.');
  }
});

const html = document.documentElement;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Ensure the site starts in dark mode by default
html.classList.add("dark");
sunIcon.classList.add("block");
sunIcon.classList.remove("hidden");
moonIcon.classList.add("hidden");
moonIcon.classList.remove("block");

function toggleTheme(mode) {
  if (mode === "light") {
    // Switch to light mode
    html.classList.remove("dark");
    sunIcon.classList.add("hidden");
    sunIcon.classList.remove("block");
    moonIcon.classList.add("block");
    moonIcon.classList.remove("hidden");
  } else if (mode === "dark") {
    // Switch to dark mode
    html.classList.add("dark");
    moonIcon.classList.add("hidden");
    moonIcon.classList.remove("block");
    sunIcon.classList.add("block");
    sunIcon.classList.remove("hidden");
  }
}

// Add event listeners to both icons
sunIcon.addEventListener("click", () => {
  toggleTheme("light"); // Switch to light mode when sun icon is clicked
});

moonIcon.addEventListener("click", () => {
  toggleTheme("dark"); // Switch to dark mode when moon icon is clicked

});






