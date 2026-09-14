import { Cake, MapPin, Plane } from 'lucide-react';
import type { CSSProperties } from 'react';

import { carePhrases, chapters, chatFragments } from '../data/memories';
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
  return (
    <section className="chapter-section protocol-section" id="archives">
      <ChapterHeading eyebrow={chapters[1].eyebrow} title={chapters[1].title}>
        <p>{chapters[1].copy[0]}</p>
      </ChapterHeading>
      <div className="chat-board">
        {chatFragments.map((message, index) => (
          <div
            className={`chat-bubble ${message.speaker === 'G3' ? 'from-g3' : 'from-souhardya'}`}
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
        occasional therapist.
      </p>
    </section>
  );
}

export function MenaceSection() {
  return (
    <section className="chapter-section menace-section">
      <ChapterHeading eyebrow="Archive 01.5" title="Evidence that G3 is a menace">
        <p>Evidence submitted without context. G3-certified. Request rejected.</p>
      </ChapterHeading>
      <div className="menace-grid">
        <MemoryImage photo={getPhoto('party-two')} showCaption />
        <MemoryImage photo={getPhoto('night-group')} showCaption />
        <MemoryImage photo={getPhoto('nightlife-solo')} showCaption />
        <MemoryImage photo={getPhoto('solo-red')} />
      </div>
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
        {chapters[2].copy.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </ChapterHeading>
      <div className="quest-layout">
        <MemoryImage photo={goaPhotos[0]} className="tilt-left" showCaption />
        <MemoryImage photo={goaPhotos[1]} className="gang-photo" showCaption />
        <div className="quest-stats">
          <span>SIDE QUEST COMPLETE</span>
          <strong>+1 questionable plan</strong>
          <strong>+3 good photos</strong>
          <strong>+7 unnecessary conversations</strong>
          <p>Achievement unlocked: everyone reached home alive.</p>
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
        {chapters[3].copy.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </ChapterHeading>
      <div className="ordinary-feature">
        <MemoryImage photo={featurePhoto} showCaption />
        <div className="ordinary-feature-copy">
          <p className="mono-label">NEW MEMORY UNLOCKED</p>
          <h3>Some office days accidentally became archive material.</h3>
          <p>
            Not because anything dramatic happened. Just because somehow this was also part of the
            year.
          </p>
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

export function PatchNotes() {
  return (
    <section className="chapter-section expansion-section">
      <ChapterHeading eyebrow={chapters[5].eyebrow} title={chapters[5].title}>
        <p>{chapters[5].copy[0]}</p>
      </ChapterHeading>
      <div className="patch-route-grid">
        <article className="patch-notes">
          <p className="mono-label">PATCH NOTES</p>
          <h3>G3 v2.0</h3>
          <div>
            <strong>Added</strong>
            <p>+ Master&apos;s degree</p>
            <p>+ new country</p>
            <p>+ new timezone</p>
            <p>+ suspicious amount of independence</p>
            <p>+ significantly more expensive flights</p>
          </div>
          <div>
            <strong>Removed</strong>
            <p>- convenient Goa proximity</p>
          </div>
          <div>
            <strong>Known bugs</strong>
            <p>- still says &quot;bro&quot;</p>
            <p>- still asks &quot;is this fine?&quot;</p>
            <p>- still G3</p>
          </div>
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
          <p>{chapters[5].copy[1]}</p>
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
        <p>For all the nonsense I give you, I am genuinely proud of you, G3.</p>
        <p>
          Watching you figure things out, fight for the things that mattered to you, work toward
          your Master&apos;s, and actually make this move happen has been pretty incredible.
        </p>
        <p>
          Somewhere between office, random dinners, Goa plans, stupid jokes, arguments, late
          conversations, and an unreasonable number of &quot;bro&quot;s, you became one of the people I
          know I will remember this chapter of my life by.
        </p>
        <p className="emotion-break">Disgusting. Enough emotions.</p>
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
        food, questionable decisions with acceptable consequences, and enough stories that I can
        build an even more unnecessarily complicated website next year.
      </p>
      <strong>Go make America deal with you.</strong>
      <p className="miss-line">
        <span>Goa will miss you.</span>
        <em>Fine. I will miss you too, bro.</em>
      </p>
      <p className="signature">- Souhardya</p>
      <DoNotPress />
      <footer>
        Made with React, TypeScript, CSS, and approximately 73 inside jokes. No AI-generated
        emotional damage was intended.
      </footer>
    </section>
  );
}
