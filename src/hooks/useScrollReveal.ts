import { useLayoutEffect } from 'react';

const revealSelectors = [
  '.site-shell .chapter-section',
  '.site-shell .dictionary-grid',
  '.site-shell .widgets-section',
  '.site-shell .cinematic-strip',
  '.site-shell .emotional-section',
  '.site-shell .finale-section',
  '.site-shell .memory-frame',
  '.site-shell .video-frame',
  '.site-shell .paper-card',
  '.site-shell .route-card',
  '.site-shell .patch-notes',
  '.site-shell .quest-stats',
  '.site-shell .evidence-copy',
  '.site-shell .ordinary-feature-copy',
  '.site-shell .emotional-copy',
  '.site-shell .care-cloud span',
];

export function useScrollReveal(enabled: boolean) {
  useLayoutEffect(() => {
    if (!enabled) {
      return;
    }

    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors.join(',')),
    ).filter((element) => !element.closest('.hero-section'));
    const parentCounts = new WeakMap<Element, number>();

    candidates.forEach((element) => {
      const parent = element.parentElement;
      const siblingIndex = parent ? parentCounts.get(parent) ?? 0 : 0;

      if (parent) {
        parentCounts.set(parent, siblingIndex + 1);
      }

      element.classList.add('scroll-reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(siblingIndex, 4) * 70}ms`);
    });

    if (!('IntersectionObserver' in window)) {
      candidates.forEach((element) => element.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      },
    );

    candidates.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [enabled]);
}
