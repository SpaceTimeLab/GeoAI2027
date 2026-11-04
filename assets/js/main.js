/*
 * Custom JavaScript for your conference website
 *
 * This file is included after the conference.bundle.js and allows you to
 * add custom JavaScript code that can interact with the conference theme.
 *
 * The conference bundle provides the following global objects:
 * - window.conference: Main conference object with modules
 * - window.bootstrap: Bootstrap components
 * - window.L: Leaflet map library (loaded dynamically when map element exists on page)
 *
 * Example: Wait for conference to be ready, then access the map
 *
 * window.conference.awaitReady().then(async () => {
 *     const map = await window.conference.map?.getMap();
 *     if (map) {
 *         // Add custom markers, layers, etc.
 *         L.marker([47.37785, 8.54035]).addTo(map);
 *     }
 * });
 *
 * Add your custom JavaScript code below.
 */

const countdowns = [...document.querySelectorAll("[data-cfp-countdown]")];
if (countdowns.length > 0) {
  const milestones = countdowns.map((countdown) => ({
    deadline: Date.parse(countdown.closest("td").previousElementSibling.querySelector("time").dateTime),
    countdown,
  }));

  const updateCountdowns = () => {
    const now = Date.now();

    for (const { deadline, countdown } of milestones) {
      const secondsLeft = Math.ceil((deadline - now) / 1000);
      if (secondsLeft <= 0) {
        countdown.textContent = "Date passed";
        continue;
      }

      const days = Math.floor(secondsLeft / 86400);
      const hours = Math.floor(secondsLeft / 3600) % 24;
      const minutes = Math.floor(secondsLeft / 60) % 60;
      const seconds = secondsLeft % 60;
      countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s left`;
    }
  };

  updateCountdowns();
  setInterval(updateCountdowns, 1000);
}
