const closeIcon = document.querySelector("#close");
const showPopup = document.querySelector("#popup");
const aboutButton = document.querySelector("#about");
const phone = document.querySelector("#phone");
const whatsapp = document.querySelector("#whatsapp");
const phoneSvg = document.querySelector("#phone-svg");
const whatsappSvg = document.querySelector("#whatsapp-svg");

aboutButton.addEventListener("click", () => {
  showPopup.classList.remove("hidden");
});

phoneSvg.addEventListener("mouseover", () => {
  if (window.innerWidth >= 1550) {
    phone.classList.remove("hidden");
  }
});

phoneSvg.addEventListener("mouseout", () => {
  if (window.innerWidth >= 1550) {
    phone.classList.add("hidden");
  }
});

whatsappSvg.addEventListener("mouseover", () => {
  if (window.innerWidth >= 1600) {
    whatsapp.classList.remove("hidden");
  }
});

whatsappSvg.addEventListener("mouseout", () => {
  if (window.innerWidth >= 1600) {
    whatsapp.classList.add("hidden");
  }
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
