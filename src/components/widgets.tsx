import { Moon, Sparkles, Terminal } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Button } from './ui';

export function G3Dictionary() {
  return (
    <section className="dictionary-grid" aria-label="G3 dictionary and small diagnostics">
      <article className="paper-card dictionary-card">
        <p className="mono-label">G3 Dictionary</p>
        <h3>weak independent</h3>
        <p className="pronunciation">/week in-di-pen-dent/</p>
        <p>
          noun. Someone who insists she does not need help while simultaneously asking:
          <br />
          <strong>&quot;is this caption fine?&quot;</strong>
        </p>
      </article>

      <article className="paper-card alias-card">
        <p className="mono-label">ARCHIVE SUBJECT</p>
        <h3>Gayathri</h3>
        <dl>
          <div>
            <dt>Aliases</dt>
            <dd>G3, MGK, Bro, Brother, &quot;Arey yaar&quot;</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>International expansion pending.</dd>
          </div>
        </dl>
      </article>

      <article className="paper-card tiny-widget">
        <p className="mono-label">boyfriend.exe</p>
        <p>STATUS: application unavailable.</p>
        <p>Souhardya&apos;s diagnosis: rejected - insufficient evidence.</p>
      </article>
    </section>
  );
}

function OverthinkButton() {
  const [stage, setStage] = useState(0);
  const states = [
    'Ready to overthink responsibly.',
    'Processing...',
    'Analyzing...',
    'Re-analyzing previous analysis...',
    'G3: Arey do not think too much. Analysis terminated.',
  ];

  return (
    <article className="paper-card overthink-card">
      <p className="mono-label">Souhardya has begun overthinking...</p>
      <p>{states[stage]}</p>
      <Button
        type="button"
        variant="outline"
        onClick={() => setStage((current) => Math.min(current + 1, states.length - 1))}
      >
        <Terminal aria-hidden="true" />
        Overthink this memory
      </Button>
    </article>
  );
}

function AppointmentPortal() {
  const options = [
    'dinner',
    'gossip',
    'emotional crisis',
    'random five-minute conversation that becomes one hour',
  ];

  return (
    <article className="paper-card appointment-card">
      <p className="mono-label">OFFICIAL G3 APPOINTMENT PORTAL(TM)</p>
      <h3>Purpose of appointment</h3>
      <div className="portal-options">
        {options.map((option) => (
          <label key={option}>
            <input type="checkbox" />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <p className="availability">Availability: &quot;bro just call&quot;</p>
    </article>
  );
}

export function BloodMoonEgg() {
  const [open, setOpen] = useState(false);

  return (
    <div className="moon-egg">
      <Button
        type="button"
        variant="ghost"
        size="icon-lg"
        aria-expanded={open}
        aria-label="Open blood moon note"
        onClick={() => setOpen((value) => !value)}
      >
        <Moon aria-hidden="true" />
      </Button>
      {open ? (
        <div className="moon-note">
          <p>WARNING: Emotional conversations may go south tonight.</p>
          <strong>G3: &quot;I&apos;m from south.&quot;</strong>
        </div>
      ) : null}
    </div>
  );
}

export function SmallWidgets() {
  return (
    <section className="widgets-section">
      <OverthinkButton />
      <AppointmentPortal />
      <article className="paper-card tiny-widget">
        <p className="mono-label">G3 INTERNATIONAL FINANCIAL SERVICES</p>
        <p>Original loan: Rs [redacted]</p>
        <p>Settlement currency: USD</p>
        <p>Status: Souhardya still has no authority over this account.</p>
      </article>
      <article className="paper-card tiny-widget">
        <p className="mono-label">LANGUAGE PACK INSTALLED: Telugu</p>
        <p>User: Souhardya</p>
        <p>Proficiency: 2%</p>
        <p>Confidence: 147%</p>
        <p>Recommendation: &quot;Please learn the meaning first.&quot;</p>
      </article>
    </section>
  );
}

export function DoNotPress() {
  const [presses, setPresses] = useState(0);
  const copy = [
    'Do not press',
    'I literally said do not.',
    'Bro.',
    'G3 behavior detected.',
    'Fine.',
  ];
  const label = copy[Math.min(presses, copy.length - 1)];
  const confetti = useMemo(() => Array.from({ length: 18 }, (_, index) => index), []);

  return (
    <div className="do-not-zone">
      <Button type="button" variant="outline" onClick={() => setPresses((value) => value + 1)}>
        <Sparkles aria-hidden="true" />
        {label}
      </Button>
      {presses >= 4 ? (
        <div className="confetti-burst" aria-hidden="true">
          {confetti.map((piece) => (
            <span key={piece} style={{ '--i': piece } as React.CSSProperties} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
