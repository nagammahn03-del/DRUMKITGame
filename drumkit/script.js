document.querySelectorAll('.drum').forEach(drum => {
  drum.addEventListener('click', () => playSound(drum.dataset.sound, drum));
});

document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  const drum = document.querySelector(`.drum[data-key="${key}"]`);
  if (drum) {
    playSound(drum.dataset.sound, drum);
  }
});

function playSound(name, drumElement) {
  const audio = new Audio(`sounds/${name}`);
  audio.play();

  drumElement.classList.add('active');
  setTimeout(() => drumElement.classList.remove('active'), 150);
}
