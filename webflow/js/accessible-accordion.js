// Accessible Accordion v1.0
// by S2 Framework

(function () {
  function initAccordion() {
    const accordionItems = document.querySelectorAll(".accordion_item");
    let counter = 1; // Start counter at 1
    accordionItems.forEach((item) => {
      const titleWrapper = item.querySelector(".accordion_title-wrapper");
      const contentWrapper = item.querySelector(".accordion_content-wrapper");
      // Warn and skip if either element is missing
      if (!titleWrapper || !contentWrapper) {
        console.warn("Accordion item missing title or content:", item);
        return;
      }
      // Generate a 4-digit ID suffix
      const idSuffix = counter.toString().padStart(4, "0");
      counter++;
      // Set IDs for the accordion item and its children
      item.id = "accordion_item-" + idSuffix;
      titleWrapper.id = "accordion_title-" + idSuffix;
      titleWrapper.setAttribute(
        "aria-controls",
        "accordion_content-" + idSuffix
      );
      titleWrapper.setAttribute("aria-expanded", "false");
      titleWrapper.setAttribute("tabindex", "0");
      titleWrapper.setAttribute("role", "button");
      contentWrapper.id = "accordion_content-" + idSuffix;
      contentWrapper.setAttribute(
        "aria-labelledby",
        "accordion_title-" + idSuffix
      );
      // Initially collapsed, so hide the content
      contentWrapper.setAttribute("hidden", "hidden");
      // Variable to store the collapse timeout
      let collapseTimeout;
      // Toggle aria-expanded and hidden attribute on click
      titleWrapper.addEventListener("click", function () {
        const isExpanded =
          titleWrapper.getAttribute("aria-expanded") === "true";
        const newExpandedState = !isExpanded;
        titleWrapper.setAttribute("aria-expanded", newExpandedState);
        if (newExpandedState) {
          // Open: remove hidden immediately and cancel any pending collapse timeout
          if (collapseTimeout) {
            clearTimeout(collapseTimeout);
          }
          contentWrapper.removeAttribute("hidden");
        } else {
          // Close: adding the hidden attribute with a delay
          collapseTimeout = setTimeout(() => {
            contentWrapper.setAttribute("hidden", "hidden");
          }, 600);
        }
      });
      // Allow keyboard activation (Enter or Space)
      titleWrapper.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          titleWrapper.click();
        }
      });
    });
  }
  // Run initAccordion when the DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAccordion);
  } else {
    initAccordion();
  }
})();
