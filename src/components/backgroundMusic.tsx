import { Music2, VolumeX } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from './ui';

type SynthMusicState = {
  kind: 'synth';
  context: AudioContext;
  gain: GainNode;
  timers: number[];
};

type AudioFileMusicState = {
  kind: 'file';
  audio: HTMLAudioElement;
};

type MusicState = SynthMusicState | AudioFileMusicState;

type AudioWindow = Window & {
  webkitAudioContext?: typeof AudioContext;
};

const licensedTrackSrc = 'audio/river-flows-in-you.mp3';

const melodyNotes = [
  392.0,
  493.88,
  587.33,
  783.99,
  659.25,
  587.33,
  493.88,
  440.0,
  392.0,
  493.88,
  659.25,
  783.99,
  739.99,
  659.25,
  587.33,
  493.88,
];

const bassNotes = [196.0, 174.61, 220.0, 146.83];

function scheduleTone(
  context: AudioContext,
  destination: AudioNode,
  frequency: number,
  startsAt: number,
  duration: number,
  volume: number,
) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = 'triangle';
  oscillator.frequency.setValueAtTime(frequency, startsAt);
  gain.gain.setValueAtTime(0, startsAt);
  gain.gain.linearRampToValueAtTime(volume, startsAt + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.001, startsAt + duration);

  oscillator.connect(gain);
  gain.connect(destination);
  oscillator.start(startsAt);
  oscillator.stop(startsAt + duration + 0.02);
}

export function BackgroundMusic({ enabled, visible }: { enabled: boolean; visible: boolean }) {
  const musicRef = useRef<MusicState | null>(null);
  const startingRef = useRef(false);
  const [blocked, setBlocked] = useState(false);
  const [playing, setPlaying] = useState(false);

  const stopMusic = useCallback(() => {
    const music = musicRef.current;

    if (!music) {
      return;
    }

    if (music.kind === 'file') {
      music.audio.pause();
      music.audio.currentTime = 0;
    } else {
      music.timers.forEach((timer) => window.clearTimeout(timer));
      music.gain.gain.cancelScheduledValues(music.context.currentTime);
      music.gain.gain.setTargetAtTime(0, music.context.currentTime, 0.08);
      window.setTimeout(() => {
        void music.context.close();
      }, 260);
    }

    musicRef.current = null;
    setPlaying(false);
  }, []);

  const startSynthMusic = useCallback(async () => {
    try {
      const AudioContextConstructor =
        window.AudioContext ?? (window as AudioWindow).webkitAudioContext;

      if (!AudioContextConstructor) {
        setBlocked(true);
        return false;
      }

      const context = new AudioContextConstructor();

      if (context.state === 'suspended') {
        await context.resume();
      }

      if (context.state !== 'running') {
        void context.close();
        setBlocked(true);
        return false;
      }

      const masterGain = context.createGain();
      masterGain.gain.setValueAtTime(0.0001, context.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.055, context.currentTime + 1.4);
      masterGain.connect(context.destination);

      const music: MusicState = {
        kind: 'synth',
        context,
        gain: masterGain,
        timers: [],
      };

      const scheduleLoop = () => {
        const beat = 0.42;
        const now = context.currentTime + 0.08;

        melodyNotes.forEach((frequency, index) => {
          scheduleTone(context, masterGain, frequency, now + index * beat, beat * 0.86, 0.06);
        });

        bassNotes.forEach((frequency, index) => {
          scheduleTone(context, masterGain, frequency, now + index * beat * 4, beat * 3.2, 0.028);
        });

        music.timers.push(window.setTimeout(scheduleLoop, melodyNotes.length * beat * 1000));
      };

      scheduleLoop();
      musicRef.current = music;
      setBlocked(false);
      setPlaying(true);
      return true;
    } catch {
      setBlocked(true);
      return false;
    }
  }, []);

  const startMusic = useCallback(async () => {
    if (musicRef.current) {
      return true;
    }

    if (startingRef.current) {
      return true;
    }

    startingRef.current = true;
    const audio = new Audio(licensedTrackSrc);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.28;

    try {
      await audio.play();
      musicRef.current = {
        kind: 'file',
        audio,
      };
      setBlocked(false);
      setPlaying(true);
      return true;
    } catch {
      audio.pause();
      return startSynthMusic();
    } finally {
      startingRef.current = false;
    }
  }, [startSynthMusic]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    void startMusic().then((started) => {
      if (!started) {
        setBlocked(true);
      }
    });

    return stopMusic;
  }, [enabled, startMusic, stopMusic]);

  useEffect(() => {
    const handleStartMusic = () => {
      void startMusic();
    };

    document.addEventListener('g3:start-music', handleStartMusic);

    return () => {
      document.removeEventListener('g3:start-music', handleStartMusic);
    };
  }, [startMusic]);

  return (
    <div className={`music-control ${playing ? 'is-playing' : ''} ${visible ? 'is-visible' : ''}`}>
      <Button
        type="button"
        variant="ghost"
        size="icon-lg"
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        title={blocked ? 'Browser needs a click to start music' : 'Background music'}
        onClick={() => {
          if (playing) {
            stopMusic();
            return;
          }

          void startMusic();
        }}
      >
        {playing ? <Music2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
      </Button>
      {blocked && !playing ? <span>tap for music</span> : null}
    </div>
  );
}
