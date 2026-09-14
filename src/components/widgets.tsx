import { HelpCircle, Moon, SearchCheck, Sparkles, Terminal } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Button } from './ui';

export function G3Dictionary() {
  const entries = [
    {
      term: 'weak independent',
      detail: "Someone who absolutely does not need help but may still ask: 'is this fine?'",
    },
    {
      term: 'MGK',
      detail: 'Meaning classified. If you know, you know.',
    },
    {
      term: "don't think too much",
      detail: "Gayathri's solution to approximately 84% of Souhardya's problems.",
    },
    {
      term: 'bro',
      detail: 'noun / pronoun / punctuation / emotional support mechanism',
    },
  ];
  const [openEntry, setOpenEntry] = useState(entries[0].term);

  return (
    <section className="dictionary-grid" aria-label="G3 dictionary and small diagnostics">
      <article className="paper-card dictionary-card">
        <p className="mono-label">G3 Dictionary</p>
        <div className="dictionary-reveals">
          {entries.map((entry) => (
            <button
              type="button"
              key={entry.term}
              className={openEntry === entry.term ? 'is-open' : ''}
              onClick={() => setOpenEntry(entry.term)}
            >
              <span>{entry.term}</span>
              <em>{entry.detail}</em>
            </button>
          ))}
        </div>
      </article>

      <article className="paper-card alias-card">
        <p className="mono-label">G3 DOSSIER</p>
        <h3>Gayathri</h3>
        <dl>
          <div>
            <dt>Known aliases</dt>
            <dd>G3, MGK, Bro, Brother, Madame</dd>
          </div>
          <div>
            <dt>Current patch</dt>
            <dd>USC / Los Angeles</dd>
          </div>
          <div>
            <dt>Default response</dt>
            <dd>&quot;don&apos;t think too much&quot;</dd>
          </div>
          <div>
            <dt>Core traits</dt>
            <dd>independent, opinionated, chaotic, caring, occasionally sensible</dd>
          </div>
        </dl>
        <p className="classified-line">Classification accuracy disputed by subject.</p>
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

function AuthenticityCheck() {
  const [checked, setChecked] = useState(false);

  return (
    <article className="paper-card tiny-widget">
      <p className="mono-label">AUTHENTICITY VERIFICATION</p>
      <p>G3: &quot;yeh bhi google se?&quot;</p>
      <Button type="button" variant="outline" onClick={() => setChecked(true)}>
        <SearchCheck aria-hidden="true" />
        Check
      </Button>
      {checked ? (
        <div className="verification-result">
          <p>Originality: questionable</p>
          <p>Intent: genuine</p>
          <p>Overthinking: confirmed</p>
          <p>Google involvement: classified</p>
          <strong>Sentiment was original. Souhardya maintains this formally.</strong>
        </div>
      ) : null}
    </article>
  );
}

function SupportDesk() {
  const [submitted, setSubmitted] = useState(false);
  const issues = [
    'need text reviewed',
    'office drama',
    'need ride',
    'existential confusion',
    'is this fine?',
    'miscellaneous bro emergency',
  ];

  return (
    <article className="paper-card tiny-widget">
      <p className="mono-label">G3 SUPPORT DESK</p>
      <h3>Need help?</h3>
      <div className="support-options">
        {issues.map((issue) => (
          <label key={issue}>
            <input type="radio" name="support-issue" />
            <span>{issue}</span>
          </label>
        ))}
      </div>
      <Button type="button" variant="outline" onClick={() => setSubmitted(true)}>
        <HelpCircle aria-hidden="true" />
        Submit
      </Button>
      {submitted ? (
        <p className="desk-result">
          TICKET RECEIVED. Assigned agent: Souhardya. Estimated response time: immediately, followed
          by unnecessary detail.
        </p>
      ) : null}
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
      <AuthenticityCheck />
      <SupportDesk />
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
    'Brother.',
    'You have always had boundary issues with buttons.',
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
        <>
          <div className="confetti-burst" aria-hidden="true">
            {confetti.map((piece) => (
              <span key={piece} style={{ '--i': piece } as React.CSSProperties} />
            ))}
          </div>
          <p className="button-confession">
            Happy Birthday, idiot. That is the only heart you are getting. Do not make this weird.
          </p>
        </>
      ) : null}
    </div>
  );
}
