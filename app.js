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
      const firstSection = sections[0];

      if (firstSection) {
        firstSection.style.display = "block";
        setTimeout(() => {
          firstSection.classList.remove("hidden");

          firstSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 10);
      }
      sections.forEach((section) => {
        section.classList.remove("hidden");
      });
    });
  }
});

