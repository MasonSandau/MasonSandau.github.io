const sections = document.querySelectorAll(".content-section");
const dynamicPart = document.getElementById("dynamic-part");
let currentSection = null; // Initialize currentSection

window.addEventListener("scroll", () => {
  let foundSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const visibleHeight = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));
    
    const visibilityPercentage = visibleHeight / (rect.height > 0 ? rect.height : 1);

    if (visibilityPercentage > 0.25) {
      foundSection = section;
    }

    if (rect.bottom < 50) {
      const content = section.querySelector(".section-content");
      content.classList.add("fade-out");
      content.classList.remove("fade-in", "scrolled");
    }
  });

  if (foundSection && foundSection !== currentSection) {
    if (currentSection) {
      const currentContent = currentSection.querySelector(".section-content");
      currentContent.classList.add("fade-out");
      currentContent.classList.remove("fade-in", "scrolled");

      currentContent.addEventListener('transitionend', () => {
        currentContent.classList.remove("fade-out");
      }, { once: true });
      
      hideSubsections(currentSection.id); // Hide previous subsections
    }

    currentSection = foundSection;
    const sectionUrl = currentSection.getAttribute("data-url");
    updateUrlProgress(sectionUrl);
    highlightCurrentSection(currentSection.id);

    const newContent = currentSection.querySelector(".section-content");
    newContent.classList.remove("fade-out");
    newContent.classList.add("fade-in", "scrolled");

    setTimeout(() => {
      newContent.classList.add("visible");
      newContent.classList.remove("fade-in");
    }, 300);
  } else if (currentSection) {
    const sectionUrl = currentSection.getAttribute("data-url");
    updateUrlProgress(sectionUrl);
  }
});

function highlightCurrentSection(sectionId) {
  const sectionIndexItems = document.querySelectorAll('#section-index li');
  sectionIndexItems.forEach(item => {
    item.classList.remove('active');
    const targetId = item.getAttribute('data-target');
    const subsectionList = document.querySelector(`#${targetId}-subsections`);

    if (targetId === sectionId) {
      item.classList.add('active');
      if (subsectionList) {
        subsectionList.style.display = 'block'; // Show subsections
      }
    } else {
      if (subsectionList) {
        subsectionList.style.display = 'none'; // Hide subsections
      }
    }
  });
}

function hideSubsections(sectionId) {
  const subsectionList = document.querySelector(`#${sectionId}-subsections`);
  if (subsectionList) {
    subsectionList.style.display = 'none'; // Hide subsections for the previous section
  }
}

// Add click event listeners to sidebar items
document.querySelectorAll('#section-index li').forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add click event listeners to subsection items
document.querySelectorAll('.subsection-list li').forEach(item => {
  item.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent triggering the main section click
    const targetId = item.getAttribute('data-target');
    const targetSubsection = document.getElementById(targetId);
    if (targetSubsection) {
      targetSubsection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function updateUrlProgress(urlPart) {
  if (!currentSection) return; // Ensure currentSection is defined

  const rect = currentSection.getBoundingClientRect();
  const visibleHeight = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));

  // Each section should have a height of 200vh
  const sectionHeight = 200 * window.innerHeight / 100; // Convert 200vh to pixels
  const visibilityPercentage = visibleHeight / (sectionHeight > 0 ? sectionHeight : 1);

  // Debugging logs
  console.log(`Visible Height: ${visibleHeight}, Section Height: ${sectionHeight}, Visibility Percentage: ${visibilityPercentage}`);

  // Update the dynamic part of the URL based on visibility
  if (visibilityPercentage >= 0.5) {
    dynamicPart.textContent = urlPart; // Full URL if more than 50% visible
  } else {
    // Partial URL reveal based on visibility
    const visibleCharsCount = Math.ceil(visibilityPercentage * urlPart.length);
    dynamicPart.textContent = urlPart.substring(0, visibleCharsCount);
  }
}

// Scroll to the "About Me" section on page load
window.onload = () => {
  const aboutMeSection = document.getElementById("about-me"); // Ensure this ID matches your HTML
  if (aboutMeSection) {
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Toggle dark/light theme on button click
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme'); // Toggle dark-theme class on body
});
