const video = document.querySelector('.hero__video');
const pause = document.querySelector('.hero__pause');

function setPlaying(playing) {
  if (playing) video.play().catch(() => {});
  else video.pause();
  pause.setAttribute('aria-pressed', String(!playing));
  pause.textContent = playing ? 'Pausar vídeo' : 'Reproducir vídeo';
}

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);

pause.addEventListener('click', () => setPlaying(video.paused));
