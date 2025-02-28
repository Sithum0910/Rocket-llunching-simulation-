document.getElementById('launch').addEventListener('click', launchRocket);

function launchRocket() {
  const height = parseFloat(document.getElementById('height').value);
  const gravity = parseFloat(document.getElementById('gravity').value);
  const rocket = document.getElementById('rocket');

  // Reset rocket position
  rocket.style.bottom = '0';

  // Calculate time to reach height (using kinematic equation: h = 0.5 * g * t^2)
  const time = Math.sqrt((2 * height) / gravity);

  // Animate the rocket
  rocket.style.transition = `bottom ${time}s ease-in-out`;
  setTimeout(() => {
    rocket.style.bottom = `${height}px`;
  }, 10);

  // Reset after animation
  setTimeout(() => {
    rocket.style.transition = 'none';
    rocket.style.bottom = '0';
  }, time * 1000 + 100);
}
