// BeerSlider: Packed Script v1.0
// by S2 Framework

// Load BeerSlider dynamically
(function () {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/beerslider@1.0.3/dist/BeerSlider.min.js";
  script.onload = initBeerSlider;
  document.head.appendChild(script);
})();
// Run BeerSlider
function initBeerSlider() {
  function runBeerSlider() {
    // Select all image wrapper elements
    const imageWrappers = document.getElementsByClassName("image-bs");
    if (imageWrappers.length === 0) return; // Exit if none found
    // Process each image wrapper
    for (const imageWrapper of imageWrappers) {
      const images = imageWrapper.querySelectorAll("img");
      if (images.length < 2) continue; // Ensure there are at least two images
      const baseImage = images[0].src;
      const baseAlt = images[0].alt || "";
      const revealImage = images[1].src;
      const revealAlt = images[1].alt || "";
      const baseLabel = images[0].getAttribute("beer-label") || "BEFORE";
      const revealLabel = images[1].getAttribute("beer-label") || "AFTER";
      // Create the BeerSlider template
      const template = `
        <div class="beer-slider" data-beer-label="${revealLabel}">
          <img src="${revealImage}" alt="${revealAlt}" loading="lazy" style="object-fit: cover;">
          <div class="beer-reveal" data-beer-label="${baseLabel}">
            <img src="${baseImage}" alt="${baseAlt}" loading="lazy" style="object-fit: cover;">
          </div>
        </div>`;
      // Remove the original two images and insert the BeerSlider template
      images[1].remove();
      images[0].remove();
      imageWrapper.insertAdjacentHTML("afterbegin", template);
    }
    // Initialize each BeerSlider
    const beerSliders = document.getElementsByClassName("beer-slider");
    for (const beerSlider of beerSliders) {
      new BeerSlider(beerSlider, {
        start: beerSlider.dataset.start
      });
    }
    // Adjust input behavior after a delay
    setTimeout(() => {
      document.querySelectorAll("input.beer-range").forEach((input) => {
        input.setAttribute("onmouseleave", "this.blur()");
        input.addEventListener("touchend", function () {
          this.blur();
        });
      });
    }, 2500);
  }
  // Check if DOM is already loaded; if not, wait for it.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runBeerSlider);
  } else {
    runBeerSlider();
  }
}
