const baseUrl = "mywebsite.com/";
const sections = document.querySelectorAll(".content-section");
const dynamicPart = document.getElementById("dynamic-part");
let currentSection = null; // Initialize currentSection

window.addEventListener("scroll", () => {
  let foundSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const visibleHeight = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));
    
    // Calculate visibility percentage
    const visibilityPercentage = visibleHeight / (rect.height > 0 ? rect.height : 1);

    // Check if the section is more than 25% visible
    if (visibilityPercentage > 0.25) {
      foundSection = section;
    }

    // Fade out content if scrolled past it
    if (rect.bottom < 50) {
      const content = section.querySelector(".section-content");
      content.classList.add("fade-out");
      content.classList.remove("fade-in", "scrolled"); // Reset fade-in classes
    }
  });

  // Update URL and content display logic
  if (foundSection && foundSection !== currentSection) {
    // Fade out current section
    if (currentSection) {
      const currentContent = currentSection.querySelector(".section-content");
      currentContent.classList.add("fade-out");
      currentContent.classList.remove("fade-in", "scrolled"); // Reset fade-in classes

      // Wait for fade-out to complete before fading in new content
      currentContent.addEventListener('transitionend', () => {
        currentContent.classList.remove("fade-out"); // Optional: Remove fade-out class
      }, { once: true });
    }

    currentSection = foundSection;
    const sectionUrl = currentSection.getAttribute("data-url");
    updateUrlProgress(sectionUrl);
    
    // Fade in new section content
    const newContent = currentSection.querySelector(".section-content");
    newContent.classList.remove("fade-out");
    newContent.classList.add("fade-in", "scrolled"); // Trigger fade-in effect

    // Use a timeout to ensure fade-out completes before fade-in starts
    setTimeout(() => {
      newContent.classList.add("visible"); // Make it visible
      newContent.classList.remove("fade-in"); // Remove fade-in class
    }, 300); // Match this duration with the CSS transition duration
  } else if (currentSection) {
    const sectionUrl = currentSection.getAttribute("data-url");
    updateUrlProgress(sectionUrl);
  }
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
