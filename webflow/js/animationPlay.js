// CSS Animations Enhancement v1.2
// by S2 Framework

// Usage example of 20px offset, 360ms delay, in a stagger group "features":
// [animationPlay="20px, 360"]
// [staggerGroup="features"]

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[animationPlay]");
  if (!elements.length) return; // exit if no elements with the attribute
  // group elements by staggerGroup
  const groups = Array.from(elements).reduce((acc, el) => {
    const group = el.getAttribute("staggerGroup");
    if (group) {
      acc[group] = acc[group] || [];
      acc[group].push(el);
    }
    return acc;
  }, {});
  const DEFAULT_STAGGER_DELAY = 180; // default stagger delay in ms
  // initialize IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return; // skip if not intersecting
        const el = entry.target;
        const [offset, delayStr] = el
          .getAttribute("animationPlay")
          .split(",")
          .map((v) => v.trim());
        const delay = parseFloat(delayStr);
        // validate animationPlay attributes
        if (!offset || isNaN(delay)) {
          console.warn("Invalid animationPlay attribute on element:", el);
          observer.unobserve(el); // stop observing invalid elements
          return;
        }
        // apply initial offset
        el.style.transform = `translateY(${offset})`;
        const group = el.getAttribute("staggerGroup");
        if (group && groups[group][0] === el) {
          // trigger staggered animations for the entire group
          groups[group].forEach((groupEl, idx) => {
            setTimeout(() => {
              groupEl.style.animationPlayState = "running";
            }, delay + DEFAULT_STAGGER_DELAY * idx);
          });
        } else {
          // trigger animation for ungrouped elements
          setTimeout(() => {
            el.style.animationPlayState = "running";
          }, delay);
        }
        // stop observing the element after triggering animation
        observer.unobserve(el);
      });
    },
    {
      threshold: 0.1 // trigger when 10% of the element is visible
    }
  );
  // initialize all elements
  elements.forEach((el) => {
    el.style.animationPlayState = "paused"; // pause animations initially
    observer.observe(el); // start observing each element
  });
});
