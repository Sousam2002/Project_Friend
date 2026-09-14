import { Check, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

import { getPhoto } from '../lib/memoryLookup';
import { MemoryImage } from './memoryMedia';
import { Button } from './ui';

const bootChecks = [
  'sarcasm module',
  'bro vocabulary',
  'questionable decision engine',
  'independence claims',
  'Goa memories',
  'ability to make Souhardya overthink',
  'random "arey yaar"',
  "Master's degree expansion pack",
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
      <p className="status-line">SYSTEM STATUS: still functioning somehow.</p>
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
          An unnecessarily elaborate website for a person who probably would have accepted a
          WhatsApp message.
        </p>
        <a className="archive-link" href="#archives">
          Enter the G3 Archives
        </a>
      </div>

      <MemoryImage photo={getPhoto('birthday-cake')} loading="eager" showCaption />
    </section>
  );
}
