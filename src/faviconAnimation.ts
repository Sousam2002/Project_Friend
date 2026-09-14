const frameCount = 6;
const frameDurationMs = 100;
const timerKey = '__g3AnimatedFaviconTimer';

type AnimatedFaviconWindow = Window & {
  [timerKey]?: number;
};

function frameHref(index: number) {
  return new URL(`favicon-frames/favicon-${index}.png`, document.baseURI).toString();
}

function getFaviconLink() {
  const existing = document.querySelector<HTMLLinkElement>('link[data-animated-favicon]');

  if (existing) {
    return existing;
  }

  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.setAttribute('data-animated-favicon', '');
  document.head.appendChild(link);

  return link;
}

export function startFaviconAnimation() {
  const animatedWindow = window as AnimatedFaviconWindow;
  const link = getFaviconLink();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;

  if (animatedWindow[timerKey]) {
    window.clearInterval(animatedWindow[timerKey]);
  }

  link.href = frameHref(frame);

  if (reducedMotion.matches) {
    return;
  }

  animatedWindow[timerKey] = window.setInterval(() => {
    frame = (frame + 1) % frameCount;
    link.href = frameHref(frame);
  }, frameDurationMs);
}
