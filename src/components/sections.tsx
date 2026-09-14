import { Cake, MapPin, Plane } from 'lucide-react';
import { useEffect, useState, type CSSProperties } from 'react';

import { carePhrases, chapters } from '../data/memories';
import { getPhoto, getVideo } from '../lib/memoryLookup';
import { MemoryImage, MemoryVideo } from './memoryMedia';
import { ChapterHeading } from './ui';
import { DoNotPress } from './widgets';

export function OpeningMemory() {
  return (
    <section className="chapter-section opening-memory">
      <ChapterHeading eyebrow={chapters[0].eyebrow} title={chapters[0].title}>
        {chapters[0].copy.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </ChapterHeading>
      <div className="opening-photo-pair">
        <MemoryImage photo={getPhoto('waterfront-wide')} showCaption />
        <MemoryImage photo={getPhoto('waterfront-silly')} showCaption />
      </div>
    </section>
  );
}

export function ChatProtocol() {
  const [scenario, setScenario] = useState<'a' | 'b' | 'c'>('a');
  const [response, setResponse] = useState<string | null>(null);
  const scenarioCopy = {
    a: [
      { speaker: 'G3', text: 'is this fine?' },
      { speaker: 'Souhardya', text: response ?? '[selecting an allegedly normal response]' },
      { speaker: 'SYSTEM', text: response ? 'Souhardya selected option 3 anyway.' : 'Awaiting unpaid consultancy.' },
      { speaker: 'SYSTEM', text: response ? 'Unpaid editorial consultancy activated.' : '' },
    ],
    b: [
      { speaker: 'Souhardya', text: 'Do you think I said something weird?' },
      { speaker: 'G3', text: "don't think too much" },
      { speaker: 'Souhardya', text: 'Yeah but-' },
      { speaker: 'G3', text: 'bro.' },
      { speaker: 'SYSTEM', text: 'OVERTHINKING PROCESS TERMINATED BY ADMINISTRATOR.' },
    ],
    c: [
      { speaker: 'G3', text: 'bro' },
      { speaker: 'Souhardya', text: 'what happened?' },
      { speaker: 'G3', text: 'nothing' },
      { speaker: 'SYSTEM', text: 'Estimated conversation duration: 47 minutes.' },
    ],
  }[scenario].filter((message) => message.text);

  return (
    <section className="chapter-section protocol-section" id="archives">
      <ChapterHeading eyebrow="Archive 01" title="The Brotocol">
        <p>
          A highly sophisticated communication system consisting primarily of &quot;bro&quot;,
          &quot;arey&quot;, unnecessary explanations, and poorly timed emotional honesty.
        </p>
      </ChapterHeading>
      <div className="scenario-tabs" aria-label="Brotocol scenarios">
        {[
          ['a', 'is this fine?'],
          ['b', 'do not think'],
          ['c', 'bro protocol'],
        ].map(([key, label]) => (
          <button
            key={key}
            type="button"
            className={scenario === key ? 'is-active' : ''}
            onClick={() => {
              setScenario(key as 'a' | 'b' | 'c');
              setResponse(null);
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {scenario === 'a' ? (
        <div className="response-row" aria-label="Response choices">
          {['Yes.', 'Looks good.', 'Let me rewrite half of it.'].map((choice) => (
            <button type="button" key={choice} onClick={() => setResponse(choice)}>
              {choice}
            </button>
          ))}
        </div>
      ) : null}
      <div className="chat-board brotocol-board">
        {scenarioCopy.map((message, index) => (
          <div
            className={`chat-bubble ${
              message.speaker === 'G3'
                ? 'from-g3'
                : message.speaker === 'SYSTEM'
                  ? 'from-system'
                  : 'from-souhardya'
            }`}
            key={`${message.speaker}-${message.text}`}
            style={{ '--delay': `${index * 80}ms` } as CSSProperties}
          >
            <span>{message.speaker}</span>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <p className="side-note">
        Somewhere along the way I apparently became editor, reviewer, technical support and
        occasional therapist. Terms and conditions were never discussed.
      </p>
    </section>
  );
}

export function MenaceSection() {
  const exhibits = [
    {
      photo: getPhoto('party-two'),
      label: 'EXHIBIT A',
      detail: 'Cause of incident: alcohol was apparently involved.',
      caption: true,
    },
    {
      photo: getPhoto('night-group'),
      label: 'EXHIBIT B',
      detail: 'Witnesses: Unfortunately adorable.',
      caption: true,
    },
    {
      photo: getPhoto('nightlife-solo'),
      label: 'EXHIBIT C',
      detail: 'Subject appears harmless. Do not be fooled.',
      caption: true,
    },
    {
      photo: getPhoto('solo-red'),
      label: 'EXHIBIT D',
      detail: 'No context will be provided at this time.',
      caption: false,
    },
  ];

  return (
    <section className="chapter-section menace-section">
      <ChapterHeading eyebrow="Archive 01.5" title="Evidence that G3 is a menace">
        <p>Of course, communication was only one part of the problem.</p>
        <p>Evidence submitted without context. G3-certified. Request rejected.</p>
      </ChapterHeading>
      <div className="menace-grid">
        {exhibits.map((exhibit) => (
          <button className="exhibit-card" type="button" key={exhibit.label}>
            <MemoryImage photo={exhibit.photo} showCaption={exhibit.caption} />
            <span>
              <strong>{exhibit.label}</strong>
              {exhibit.detail}
            </span>
          </button>
        ))}
      </div>
      <p className="case-note">
        Others: &quot;get the scrunchie&quot; / Souhardya: &quot;someone wants your
        shikanji.&quot; CASE CLOSED.
      </p>
      <div className="evidence-video-row">
        <MemoryVideo video={getVideo('motion-evidence')} />
        <div className="evidence-copy">
          <p className="mono-label">VIDEO ATTACHMENT</p>
          <h3>Some memories required a play button.</h3>
          <p>
            Not every archive entry can be frozen into a perfect photo. Some of them need the
            slight chaos of actual motion.
          </p>
        </div>
      </div>
    </section>
  );
}

export function GoaSideQuest() {
  const goaPhotos = ['waterfall-candid', 'goa-gang', 'sunny-street'].map(getPhoto);

  return (
    <section className="chapter-section goa-section">
      <ChapterHeading eyebrow={chapters[2].eyebrow} title={chapters[2].title}>
        <p>Somehow, we were occasionally allowed outside.</p>
        {chapters[2].copy.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </ChapterHeading>
      <div className="quest-layout">
        <MemoryImage photo={goaPhotos[0]} className="tilt-left" showCaption />
        <MemoryImage photo={goaPhotos[1]} className="gang-photo" showCaption />
        <div className="quest-stats">
          <span>SIDE QUEST #03</span>
          <strong>OBJECTIVE: touch grass</strong>
          <strong>PARTY SIZE: questionable</strong>
          <strong>DIFFICULTY: Goa monsoon</strong>
          <p>RESULT: +27 photos, +1 memory, -100 dry clothes.</p>
          <p>Achievement unlocked: everyone actually showed up. Main quest temporarily ignored.</p>
        </div>
        <MemoryImage photo={goaPhotos[2]} className="tilt-right" />
      </div>
      <div className="video-ribbon">
        <MemoryVideo video={getVideo('side-quest-footage')} className="side-quest-video" />
        <p>
          Additional exhibit: moving proof that the side quest was, somehow, not imaginary.
        </p>
      </div>
    </section>
  );
}

export function OrdinaryMemories() {
  const featurePhoto = getPhoto('office-peace-signs');
  const ordinary = [
    getPhoto('office-selfie-one'),
    getPhoto('office-selfie-two'),
    getPhoto('dinner-drinks'),
    getPhoto('traditional'),
  ];

  return (
    <section className="chapter-section ordinary-section">
      <ChapterHeading eyebrow={chapters[3].eyebrow} title={chapters[3].title}>
        <p>The big days are easy to remember.</p>
        <p>Weirdly, I think the ordinary ones matter more.</p>
        {[
          "is that they don't usually announce themselves.",
          "At the time, it's just another office day.",
          'Another dinner.',
          "Another 'bro, are you coming?'",
          "Another 'text me when you reach.'",
          'And then one day, all of it has a before and after.',
        ].map((line) => (
          <p className="memory-line" key={line}>
            {line}
          </p>
        ))}
      </ChapterHeading>
      <div className="ordinary-feature">
        <MemoryImage photo={featurePhoto} showCaption />
        <div className="ordinary-feature-copy">
          <p className="mono-label">ARCHIVE TYPE: ordinary day</p>
          <h3>Some office days accidentally became archive material.</h3>
          <p>
            Not because anything dramatic happened. Just because somehow this was also part of the
            year.
          </p>
          <dl className="archive-meta">
            <div>
              <dt>Significance at the time</dt>
              <dd>none</dd>
            </div>
            <div>
              <dt>Significance now</dt>
              <dd>annoyingly high</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="ordinary-grid">
        {ordinary.map((photo, index) => (
          <MemoryImage
            key={photo.id}
            photo={photo}
            className={index % 2 === 0 ? 'tilt-left' : 'tilt-right'}
            showCaption
          />
        ))}
      </div>
    </section>
  );
}

export function CareBanter() {
  return (
    <section className="chapter-section care-section">
      <ChapterHeading eyebrow={chapters[4].eyebrow} title={chapters[4].title}>
        <p>{chapters[4].copy[0]}</p>
      </ChapterHeading>
      <div className="care-cloud" aria-label="Small phrases from the friendship">
        {carePhrases.map((phrase) => (
          <span key={phrase}>{phrase}</span>
        ))}
      </div>
      <p className="care-ending">{chapters[4].copy[1]}</p>
    </section>
  );
}

function TimezoneWidget() {
  const [now, setNow] = useState(() => new Date());
  const formatterOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
  };

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <article className="timezone-widget">
      <p className="mono-label">LIVE TIMEZONE DAMAGE</p>
      <div>
        <strong>GOA</strong>
        <span>
          {new Intl.DateTimeFormat('en-IN', {
            ...formatterOptions,
            timeZone: 'Asia/Kolkata',
          }).format(now)}
        </span>
      </div>
      <div>
        <strong>LOS ANGELES</strong>
        <span>
          {new Intl.DateTimeFormat('en-US', {
            ...formatterOptions,
            timeZone: 'America/Los_Angeles',
          }).format(now)}
        </span>
      </div>
      <p>One of us is always messaging at a questionable hour now.</p>
    </article>
  );
}

export function PatchNotes() {
  return (
    <section className="chapter-section expansion-section">
      <ChapterHeading eyebrow={chapters[5].eyebrow} title={chapters[5].title}>
        <p>And then, because apparently normal life wasn&apos;t enough...</p>
        <p>{chapters[5].copy[0]}</p>
      </ChapterHeading>
      <div className="patch-route-grid">
        <article className="patch-notes">
          <p className="mono-label">PATCH NOTES</p>
          <h3>G3 v2.0</h3>
          <div>
            <strong>Added</strong>
            <p>+ USC</p>
            <p>+ Master&apos;s degree</p>
            <p>+ new continent</p>
            <p>+ new timezone</p>
            <p>+ new people</p>
            <p>+ new adventures</p>
            <p>+ wildly inconvenient distance from Goa</p>
          </div>
          <div>
            <strong>Retained</strong>
            <p>+ bro vocabulary</p>
            <p>+ independence</p>
            <p>+ &quot;is this fine?&quot;</p>
            <p>+ ability to call out Souhardya&apos;s nonsense</p>
          </div>
          <div>
            <strong>Known bugs</strong>
            <p>- international calls now require timezone maths</p>
            <p>- dinner plans have become logistically impossible</p>
            <p>- Souhardya still has not adapted</p>
          </div>
          <p className="major-update">Major update. Same G3.</p>
        </article>

        <div className="route-card" aria-label="Goa to USC Los Angeles route">
          <div className="route-point">
            <MapPin aria-hidden="true" />
            <span>GOA</span>
          </div>
          <div className="route-line">
            <Plane aria-hidden="true" />
          </div>
          <div className="route-point destination">
            <MapPin aria-hidden="true" />
            <span>USC, Los Angeles</span>
          </div>
          <p>Distance: unacceptable.</p>
          <p>Time difference: also unacceptable.</p>
          <p>Friendship status: loading... unfortunately unaffected.</p>
          <TimezoneWidget />
        </div>
      </div>
    </section>
  );
}

export function CinematicSequence() {
  const portraits = [
    getPhoto('hoodie-portrait-one'),
    getPhoto('hoodie-portrait-two'),
    getPhoto('hoodie-portrait-three'),
    getPhoto('hoodie-portrait-four'),
  ];

  return (
    <section className="cinematic-strip" aria-label="Waterfront portraits">
      {portraits.map((photo, index) => (
        <MemoryImage
          photo={photo}
          key={photo.id}
          className={index % 2 === 0 ? 'lifted' : 'lowered'}
          showCaption={index === 0}
        />
      ))}
    </section>
  );
}

export function EmotionalEnding() {
  return (
    <section className="emotional-section">
      <MemoryImage photo={getPhoto('solo-chair')} className="emotional-photo" />
      <div className="emotional-copy">
        <p>Okay. One serious minute.</p>
        <p>
          For all the nonsense I give you, watching you make this move happen has been pretty
          incredible.
        </p>
        <p>
          I saw at least some of the uncertainty, the applications, the endless decisions, the
          &quot;is this fine?&quot; messages, and the amount of work that went into getting here.
        </p>
        <p>And now you&apos;re actually there.</p>
        <p>
          You also somehow became one of the few people capable of telling me &quot;don&apos;t think
          too much&quot; and occasionally making it work.
        </p>
        <p>
          Somewhere between office, random dinners, Goa plans, stupid jokes, arguments, late
          conversations, and an unreasonable number of &quot;bro&quot;s, you became one of the people I
          know I will remember this chapter of my life by.
        </p>
        <p>Pretty annoying, honestly.</p>
        <p className="emotion-break">But I&apos;m proud of you, G3.</p>
      </div>
    </section>
  );
}

export function BirthdayFinale() {
  return (
    <section
      className="finale-section"
      style={{ '--finale-bg': `url("${getPhoto('hoodie-portrait-three').src}")` } as CSSProperties}
    >
      <Cake aria-hidden="true" />
      <h2>Happy Birthday, G3.</h2>
      <p>
        I hope this next year gives you better adventures, bigger opportunities, good people, great
        food, questionable decisions with acceptable consequences, and enough stories that I can keep
        making fun of you from another continent.
      </p>
      <p>You worked ridiculously hard to get to this chapter. Go enjoy it.</p>
      <strong>Go make America deal with you.</strong>
      <p>I&apos;m sure they&apos;ll manage.</p>
      <p className="miss-line">
        <span>Goa will miss you.</span>
        <em>Fine. I will miss you too, bro.</em>
      </p>
      <p className="signature">- Souhardya</p>
      <DoNotPress />
      <footer>
        Made with an unreasonable amount of time, memories and approximately 73 inside jokes. No AI-generated
        emotional damage was intended.
      </footer>
    </section>
  );
}
