export type PhotoCategory =
  | 'waterfront'
  | 'office'
  | 'goa'
  | 'nightlife'
  | 'traditional'
  | 'solo'
  | 'ordinary';

export type PhotoMemory = {
  id: string;
  src: string;
  alt: string;
  category: PhotoCategory;
  mood: 'chaotic' | 'casual' | 'cinematic' | 'warm' | 'quiet';
  aspect: 'landscape' | 'portrait' | 'tall';
  priority: boolean;
  caption?: string;
  placement?: string;
  fallbackSrc?: string;
};

export type VideoMemory = {
  id: string;
  src: string;
  poster: string;
  captionsSrc: string;
  title: string;
  caption: string;
  category: PhotoCategory;
  mood: 'chaotic' | 'casual' | 'cinematic' | 'warm' | 'quiet';
  aspect: 'portrait' | 'landscape';
};

export type Chapter = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string[];
  tone: 'chaotic' | 'ordinary' | 'warm' | 'cinematic';
};

export const photos: PhotoMemory[] = [
  {
    id: 'birthday-cake',
    src: 'memories/first-birthday.jpeg',
    alt: 'Gayathri smiling in birthday glasses while holding a chocolate cake in front of birthday decorations.',
    category: 'ordinary',
    mood: 'warm',
    aspect: 'portrait',
    priority: true,
    caption: 'The birthday evidence goes first. Obviously.',
    placement: 'opening-establishing',
    fallbackSrc: 'memories/memory-17.jpeg',
  },
  {
    id: 'waterfront-start',
    src: 'memories/memory-17.jpeg',
    alt: 'Souhardya and Gayathri standing together by the waterfront at night.',
    category: 'waterfront',
    mood: 'cinematic',
    aspect: 'portrait',
    priority: false,
    caption: 'Somewhere along the way, this became normal.',
    placement: 'opening-establishing',
  },
  {
    id: 'waterfront-wide',
    src: 'memories/memory-01.jpeg',
    alt: 'Three friends sitting by the waterfront at night.',
    category: 'waterfront',
    mood: 'cinematic',
    aspect: 'landscape',
    priority: true,
    caption: 'Evidence that plans occasionally became real.',
    placement: 'wide-anchor',
  },
  {
    id: 'party-two',
    src: 'memories/memory-02.jpeg',
    alt: 'Gayathri smiling with a friend at a night out.',
    category: 'nightlife',
    mood: 'chaotic',
    aspect: 'portrait',
    priority: false,
    caption: 'Responsible adults were allegedly present.',
  },
  {
    id: 'waterfall-candid',
    src: 'memories/memory-03.jpeg',
    alt: 'Gayathri and a friend standing near a stream and green trees.',
    category: 'goa',
    mood: 'warm',
    aspect: 'portrait',
    priority: false,
    caption: 'Side quest complete.',
  },
  {
    id: 'goa-gang',
    src: 'memories/memory-04.jpeg',
    alt: 'A group of friends posing together in nature during an outing.',
    category: 'goa',
    mood: 'chaotic',
    aspect: 'portrait',
    priority: false,
    caption: 'Difficulty: plans involving this group. Unknown.',
    placement: 'gang-spread',
  },
  {
    id: 'office-selfie-one',
    src: 'memories/memory-05.jpeg',
    alt: 'Gayathri and Souhardya sitting together in office.',
    category: 'office',
    mood: 'casual',
    aspect: 'portrait',
    priority: false,
    caption: 'Proof that some good things did, in fact, come out of going to office.',
  },
  {
    id: 'dinner-drinks',
    src: 'memories/memory-06.jpeg',
    alt: 'Gayathri smiling at dinner with colorful drinks on the table.',
    category: 'ordinary',
    mood: 'warm',
    aspect: 'portrait',
    priority: false,
    caption: 'Dinner. One random plan. Probably too many opinions.',
  },
  {
    id: 'sunny-street',
    src: 'memories/memory-07.jpeg',
    alt: 'Gayathri standing on a sunny street during an outing.',
    category: 'solo',
    mood: 'warm',
    aspect: 'portrait',
    priority: false,
  },
  {
    id: 'office-selfie-two',
    src: 'memories/memory-08.jpeg',
    alt: 'Gayathri and Souhardya sitting together and smiling indoors.',
    category: 'office',
    mood: 'casual',
    aspect: 'portrait',
    priority: false,
    caption: 'Another unnecessarily long conversation was probably loading.',
  },
  {
    id: 'office-peace-signs',
    src: 'memories/memory-20.jpeg',
    alt: 'Souhardya and Gayathri sitting indoors and making peace signs at the camera.',
    category: 'office',
    mood: 'casual',
    aspect: 'landscape',
    priority: false,
    caption: 'Office documentation, but make it unserious.',
    placement: 'ordinary-feature',
  },
  {
    id: 'traditional',
    src: 'memories/memory-09.jpeg',
    alt: 'Gayathri and Souhardya standing together in traditional outfits.',
    category: 'traditional',
    mood: 'warm',
    aspect: 'portrait',
    priority: false,
    caption: 'Rare footage of us looking civilized.',
  },
  {
    id: 'night-group',
    src: 'memories/memory-10.jpeg',
    alt: 'Gayathri smiling with friends at a festive night event.',
    category: 'nightlife',
    mood: 'chaotic',
    aspect: 'landscape',
    priority: false,
    caption: 'Evidence submitted without context.',
  },
  {
    id: 'hoodie-portrait-one',
    src: 'memories/memory-11.jpeg',
    alt: 'Gayathri smiling by the waterfront at night in a beige hoodie.',
    category: 'waterfront',
    mood: 'cinematic',
    aspect: 'portrait',
    priority: false,
    caption: 'G3 before the international expansion.',
  },
  {
    id: 'hoodie-portrait-two',
    src: 'memories/memory-12.jpeg',
    alt: 'Gayathri looking back by the waterfront at night in a beige hoodie.',
    category: 'waterfront',
    mood: 'quiet',
    aspect: 'portrait',
    priority: false,
  },
  {
    id: 'hoodie-portrait-three',
    src: 'memories/memory-13.jpeg',
    alt: 'Gayathri smiling by the waterfront at night.',
    category: 'waterfront',
    mood: 'cinematic',
    aspect: 'portrait',
    priority: false,
  },
  {
    id: 'hoodie-portrait-four',
    src: 'memories/memory-14.jpeg',
    alt: 'Gayathri standing at the waterfront at night.',
    category: 'waterfront',
    mood: 'quiet',
    aspect: 'portrait',
    priority: false,
  },
  {
    id: 'nightlife-solo',
    src: 'memories/memory-15.jpeg',
    alt: 'Gayathri smiling at a nightlife venue.',
    category: 'nightlife',
    mood: 'chaotic',
    aspect: 'tall',
    priority: false,
    caption: 'G3 behavior detected.',
  },
  {
    id: 'waterfront-silly',
    src: 'memories/memory-16.jpeg',
    alt: 'Souhardya and Gayathri making silly poses by the waterfront at night.',
    category: 'waterfront',
    mood: 'chaotic',
    aspect: 'portrait',
    priority: false,
    caption: 'Source: trust me bro.',
  },
  {
    id: 'solo-red',
    src: 'memories/memory-18.jpeg',
    alt: 'Gayathri posing in a red top against a warm wall.',
    category: 'solo',
    mood: 'warm',
    aspect: 'tall',
    priority: false,
  },
  {
    id: 'solo-chair',
    src: 'memories/memory-19.jpeg',
    alt: 'Gayathri standing near lounge chairs at an evening venue.',
    category: 'solo',
    mood: 'quiet',
    aspect: 'tall',
    priority: false,
  },
];

export const videos: VideoMemory[] = [
  {
    id: 'motion-evidence',
    src: 'memories/memory-video-01.mp4',
    poster: 'memories/memory-10.jpeg',
    captionsSrc: 'memories/memory-video-01.vtt',
    title: 'Motion evidence',
    caption: 'Because apparently still photos were not enough evidence.',
    category: 'nightlife',
    mood: 'chaotic',
    aspect: 'portrait',
  },
  {
    id: 'side-quest-footage',
    src: 'memories/memory-video-02.mp4',
    poster: 'memories/memory-04.jpeg',
    captionsSrc: 'memories/memory-video-02.vtt',
    title: 'Side quest footage',
    caption: 'A moving exhibit from the department of questionable plans.',
    category: 'goa',
    mood: 'chaotic',
    aspect: 'portrait',
  },
];

export const chapters: Chapter[] = [
  {
    id: 'entered',
    eyebrow: 'Archive 00',
    title: 'G3 has entered the system',
    tone: 'chaotic',
    copy: [
      'Aliases detected: Gayathri, G3, MGK, bro, brother, and one very expressive arey yaar.',
      'System status: still functioning somehow.',
    ],
  },
  {
    id: 'protocol',
    eyebrow: 'Archive 01',
    title: 'The G3-Souhardya communication protocol',
    tone: 'chaotic',
    copy: [
      'Not a WhatsApp clone. Just the suspiciously accurate rhythm of two people who made bro a complete sentence.',
    ],
  },
  {
    id: 'side-quests',
    eyebrow: 'Archive 02',
    title: 'Goa Side Quests',
    tone: 'chaotic',
    copy: [
      'Somehow, we actually went outside.',
      'Side quests > main storyline.',
    ],
  },
  {
    id: 'ordinary',
    eyebrow: 'Archive 03',
    title: 'The weird thing about memories...',
    tone: 'ordinary',
    copy: [
      '...is that you never know which completely ordinary day is going to become one.',
      'Office. Dinner. One random plan. One more text me when you reach. And somehow, a year happened.',
    ],
  },
  {
    id: 'care',
    eyebrow: 'Archive 04',
    title: "We're terrible at being sentimental",
    tone: 'warm',
    copy: [
      'So most of it looked like this instead.',
      "I think that's probably what friendship looks like anyway.",
    ],
  },
  {
    id: 'expansion',
    eyebrow: 'Archive 05',
    title: 'G3: The International Expansion Pack',
    tone: 'cinematic',
    copy: [
      'Turns out the side quest was actually character development.',
      'Goa is losing one G3. America has absolutely no idea what is coming.',
    ],
  },
];

export const chatFragments = [
  { speaker: 'G3', text: 'bro' },
  { speaker: 'Souhardya', text: 'Yes brother' },
  { speaker: 'G3', text: 'arey yaar' },
  { speaker: 'Souhardya', text: '*immediately writes a paragraph*' },
  { speaker: 'G3', text: "don't think too much" },
  { speaker: 'Souhardya', text: '*proceeds to think too much*' },
  { speaker: 'G3', text: 'is this fine?' },
  { speaker: 'Souhardya', text: '[opens unpaid consulting division]' },
];

export const carePhrases = [
  'Reached?',
  'Had dinner?',
  'You okay now?',
  'Call?',
  "Don't think too much.",
  "I'll help.",
  'Text me when you reach.',
  'Bro.',
];
