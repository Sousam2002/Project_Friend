import { Check, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

import { getPhoto } from '../lib/memoryLookup';
import { MemoryImage } from './memoryMedia';
import { Button } from './ui';

const bootChecks = [
  'bro vocabulary installed',
  '"arey yaar" response engine online',
  'independence mode enabled',
  'opinion-request protocol active',
  'Goa archive mounted',
  'questionable decisions recovered',
  'Souhardya-overthinking suppression module running',
  "Master's degree expansion pack loaded",
];

function BootPanel({ mode = 'launch' }: { mode?: 'launch' | 'inline' }) {
  return (
    <div
      className={`boot-panel ${mode === 'launch' ? 'launch-panel' : ''}`}
      aria-label="G3 system diagnostics"
    >
      <p className="mono-label boot-title">INITIALIZING G3.EXE...</p>
      <div className="boot-checks">
        {bootChecks.map((check, index) => (
          <span
            key={check}
            className="boot-check"
            style={{ '--step': index } as React.CSSProperties}
          >
            <Check aria-hidden="true" />
            {check}
          </span>
        ))}
      </div>
      <p className="status-line">
        WARNING: &quot;don&apos;t think too much&quot; has been used an unreasonable number of
        times.
        <br />
        G3.EXE READY.
      </p>
    </div>
  );
}

export function BootGate({ onEnter }: { onEnter: () => void }) {
  const [readyToEnter, setReadyToEnter] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const enterTimer = window.setTimeout(() => setReadyToEnter(true), 4050);

    return () => {
      window.clearTimeout(enterTimer);
    };
  }, []);

  const handleEnter = () => {
    document.dispatchEvent(new Event('g3:start-music'));
    setExiting(true);
    onEnter();
  };

  return (
    <section className={`launch-gate ${exiting ? 'is-exiting' : ''}`} aria-label="Opening loader">
      <div className="launch-stack">
        <BootPanel />
        <Button
          type="button"
          className="launch-enter"
          disabled={!readyToEnter}
          aria-label="Enter the G3 Archives"
          onClick={handleEnter}
        >
          <ChevronDown aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}

export function SystemBoot() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="archive-subject">Archive subject: Gayathri / G3 / MGK</p>
        <h1>Happy Birthday, G3.</h1>
        <p>
          An unnecessarily elaborate website for someone who probably would&apos;ve been perfectly
          happy with &quot;happy birthday bro&quot;.
        </p>
        <p className="hero-afterthought">Unfortunately, you know me.</p>
        <a className="archive-link" href="#archives">
          Enter the archives
        </a>
      </div>

      <MemoryImage photo={getPhoto('birthday-cake')} loading="eager" showCaption />
    </section>
  );
}
