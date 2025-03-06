// Modal v1.2
// by S2 Framework

// keep the DOMContentLoaded wrapper for flexibility
document.addEventListener("DOMContentLoaded", () => {
  // delegate click events for opening and closing modals
  document.addEventListener("click", (e) => {
    // if a close button (or its child) is clicked, close the modal
    const closeTrigger = e.target.closest('[data-modal-action="close"]');
    if (closeTrigger) {
      const modal = closeTrigger.closest("dialog");
      if (modal) modal.close();
      return;
    }
    // if a modal-open button is clicked, show the corresponding modal
    const openTrigger = e.target.closest("button[data-modal]");
    if (openTrigger) {
      const modalId = openTrigger.getAttribute("data-modal");
      const modal = document.querySelector(`dialog[data-modal="${modalId}"]`);
      if (modal) modal.showModal();
      return;
    }
  });
  // close the modal if the user clicks on its backdrop
  document.querySelectorAll("dialog").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  });
  // when a modal is closed, update local storage for auto-open suppression
  document.querySelectorAll("dialog").forEach((modal) => {
    modal.addEventListener("close", () => {
      // check if the modal has a data-modal-reopen attribute
      if (modal.hasAttribute("data-modal-reopen")) {
        const daysStr = modal.getAttribute("data-modal-reopen").trim();
        const days = parseInt(daysStr, 10);
        if (!isNaN(days) && days > 0) {
          // use the modal's data-modal value as the unique key
          const modalId = modal.getAttribute("data-modal");
          const storageKey = "modalAutoOpen_" + modalId;
          // calculate the future timestamp (in ms) when the modal can auto-open again
          const reopenTime = Date.now() + days * 24 * 3600 * 1000;
          localStorage.setItem(storageKey, reopenTime.toString());
        }
      }
    });
  });
  // process dialogs with the optional data-modal-open attribute
  document.querySelectorAll("dialog[data-modal-open]").forEach((modal) => {
    const openValue = modal.getAttribute("data-modal-open").trim();
    // if the value is empty or "false", do nothing
    if (!openValue || openValue.toLowerCase() === "false") {
      return;
    }
    // use the modal's unique data-modal value for local storage
    const modalId = modal.getAttribute("data-modal");
    const storageKey = "modalAutoOpen_" + modalId;
    const storedTime = localStorage.getItem(storageKey);
    if (storedTime && Date.now() < parseInt(storedTime, 10)) {
      // auto-opening is suppressed because the stored time is in the future
      return;
    }
    // check for a time-based trigger
    // only accept if the unit is valid: e.g. "3s", "2800ms", "0s", "0ms"
    const timeMatch = openValue.match(/^(\d+(?:\.\d+)?)(ms|s)$/);
    if (timeMatch) {
      let delay = parseFloat(timeMatch[1]);
      if (timeMatch[2] === "s") {
        delay *= 1000;
      }
      setTimeout(() => {
        modal.showModal();
      }, delay);
      return;
    }
    // check for a scroll-based trigger: e.g. "600px"
    const scrollMatch = openValue.match(/^(\d+)(px)$/);
    if (scrollMatch) {
      const scrollOffset = parseInt(scrollMatch[1], 10);
      const onScroll = () => {
        if (window.pageYOffset >= scrollOffset) {
          modal.showModal();
          window.removeEventListener("scroll", onScroll);
        }
      };
      window.addEventListener("scroll", onScroll);
      return;
    }
    // if the value doesn't match any accepted pattern, ignore
  });
});
