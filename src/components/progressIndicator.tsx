import { useEffect, useState } from 'react';

const chapters = [
  { label: 'SYSTEM', selector: '#top' },
  { label: 'BROTOCOL', selector: '#archives' },
  { label: 'EVIDENCE', selector: '.menace-section' },
  { label: 'SIDE QUESTS', selector: '.goa-section' },
  { label: 'ARCHIVE', selector: '.ordinary-section' },
  { label: 'INTERNATIONAL EXPANSION', selector: '.expansion-section' },
  { label: 'EMOTIONAL DAMAGE', selector: '.emotional-section' },
  { label: 'ABORT EMOTIONS', selector: '.finale-section' },
];

export function ProgressIndicator({ visible }: { visible: boolean }) {
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState(chapters[0].label);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      let currentChapter = chapters[0];

      chapters.forEach((chapter) => {
        const element = document.querySelector(chapter.selector);

        if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.38) {
          currentChapter = chapter;
        }
      });

      setProgress(Math.min(1, Math.max(0, nextProgress)));
      setLabel(nextProgress > 0.97 ? '97% - dangerously sentimental' : currentChapter.label);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [visible]);

  return (
    <div className={`chapter-progress ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <span>{label}</span>
      <div className="chapter-progress-track">
        <i style={{ transform: `scaleX(${progress})` }} />
      </div>
    </div>
  );
}
