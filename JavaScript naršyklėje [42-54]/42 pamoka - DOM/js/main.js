const fadeUps = [...document.querySelectorAll('.fade-up')];

const fadeAnimDelayBase = 600;
const fadeAnimDelayDelta = 400

fadeUps.forEach((fadeUp, i) => {
  setTimeout(() => fadeUp.classList.add('show'), fadeAnimDelayBase + i * fadeAnimDelayDelta)
});