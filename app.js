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


