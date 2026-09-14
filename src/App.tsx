import { useState } from 'react';

import { BackgroundMusic } from './components/backgroundMusic';
import { BootGate, SystemBoot } from './components/boot';
import {
  BirthdayFinale,
  CareBanter,
  ChatProtocol,
  CinematicSequence,
  EmotionalEnding,
  GoaSideQuest,
  MenaceSection,
  OpeningMemory,
  OrdinaryMemories,
  PatchNotes,
} from './components/sections';
import { BloodMoonEgg, G3Dictionary, SmallWidgets } from './components/widgets';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [siteReady, setSiteReady] = useState(false);
  const [showBoot, setShowBoot] = useState(true);

  useScrollReveal(siteReady);

  return (
    <main>
      <BackgroundMusic enabled={siteReady} visible={siteReady} />
      <div className={`site-shell ${siteReady ? 'is-visible' : ''}`} aria-hidden={!siteReady}>
        <SystemBoot />
        <BloodMoonEgg />
        <OpeningMemory />
        <ChatProtocol />
        <G3Dictionary />
        <SmallWidgets />
        <MenaceSection />
        <GoaSideQuest />
        <OrdinaryMemories />
        <CareBanter />
        <PatchNotes />
        <CinematicSequence />
        <EmotionalEnding />
        <BirthdayFinale />
      </div>
      {showBoot ? (
        <BootGate
          onEnter={() => {
            setSiteReady(true);
            window.setTimeout(() => setShowBoot(false), 700);
          }}
        />
      ) : null}
    </main>
  );
}
