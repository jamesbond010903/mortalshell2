// Launch data — Shell names are confirmed from the trophy list; ability and
// playstyle details are summarized from launch coverage; unlock locations are
// sourced from GameRant and Rock Paper Shotgun guides and are re-verified
// against the in-game world after launch.
export interface Shell {
  slug: string;
  name: string;
  description: string;
  confidence: "confirmed" | "community" | "roadmap";
  tags: [string, string, string];
  start: string;
  watch: string;
  source: string;
  image?: string;
  howToUnlock?: string;
  unlockSteps?: string[];
}

export const shells: Shell[] = [
  {
    slug: "tiel",
    name: "Tiel",
    description: "Agile, elusive, and strongest when fights stay clean.",
    confidence: "community",
    tags: ["Rogue play", "Invisibility", "Hit-and-run"],
    start: "Use invisibility to land critical stabs, then re-engage from safety.",
    watch: "A fragile Shell that can be punished hard if caught in the open.",
    source: "GameRant + Rock Paper Shotgun guides",
    image: "/images/shell-tiel.jpg",
    howToUnlock:
      "Found east of Mushroom Village — interact with Tiel's gravestone inside a fenced, torchlit camp to unlock him.",
    unlockSteps: [
      "Head southeast from Widow's Overlook Beacon, past the Great Arbiter arena.",
      "Keep east of Mushroom Village to a fenced, torchlit camp.",
      "Interact with Tiel's gravestone and let the memory play out.",
    ],
  },
  {
    slug: "eredrim",
    name: "Eredrim",
    description: "A durable front-line Shell built to absorb and trade.",
    confidence: "community",
    tags: ["High health", "Line-holding", "Slow tempo"],
    start: "Trade blows to build resolve, then spend it on heavy abilities.",
    watch: "Slow movement can leave you open to ranged pressure.",
    source: "GameRant + Rock Paper Shotgun guides",
    image: "/images/shell-eredrim.jpg",
    howToUnlock:
      "Defeat the Warden in the Citadel of Penance arena, then claim Eredrim's body.",
    unlockSteps: [
      "Enter the Citadel of Penance via the Citadel Gate Lever or the One-Legged Wolf candle.",
      "Take the lift up to the arena and interact with the coin pouch to start the Warden fight.",
      "Defeat the Warden, then claim Eredrim's body.",
    ],
  },
  {
    slug: "sariel",
    name: "Sariel",
    description: "A versatile Shell with balanced combat options.",
    confidence: "community",
    tags: ["Balanced", "Flexible", "All-rounder"],
    start: "Adapt to the encounter instead of committing to one approach.",
    watch: "No single overwhelming strength against specialized threats.",
    source: "GameRant + Rock Paper Shotgun guides",
    image: "/images/shell-sariel.jpg",
    howToUnlock:
      "Defeat Sariel in the Chamber of Becoming and break the surrounding stone tablets to stop him reviving, then claim the Shell.",
    unlockSteps: [
      "Defeat Sariel the Endless in the far-south white ruins to reveal the Chamber of Becoming.",
      "Enter the dungeon and fight Sariel again, breaking the four stone tablets around the arena.",
      "Claim the Shell (and the Clockwork Scythe).",
    ],
  },
  {
    slug: "lazlo",
    name: "Lazlo",
    description: "Heats its armor to unleash burning shockwaves.",
    confidence: "community",
    tags: ["Fire", "Shockwave", "Heat meter"],
    start: "Live on the edge of the heat meter for bonus damage.",
    watch: "Overheating temporarily disables your armor.",
    source: "GameRant + Rock Paper Shotgun guides",
    image: "/images/shell-lazlo.jpg",
    howToUnlock:
      "Defeat Lord Vellen of Mammon in the Crypts of Mammon, then claim Lazlo's body.",
    unlockSteps: [
      "Enter the Crypts of Mammon in western Mammon.",
      "Fight through to Lord Vellen of Mammon and defeat him.",
      "Continue forward to claim Lazlo's body.",
    ],
  },
  {
    slug: "proxima",
    name: "Proxima",
    description: "Fires a hook that pulls in and shocks enemies.",
    confidence: "community",
    tags: ["Lightning", "Pull", "Damage-over-time"],
    start: "Pull fragile enemies toward you, then finish them at close range.",
    watch: "Lightning damage is over time, not burst.",
    source: "GameRant + Rock Paper Shotgun guides",
    image: "/images/shell-proxima.jpg",
    howToUnlock:
      "Found inside a Shattered Beacon northeast of Blackridge Pass Beacon, near the Crumbling Tunnel dungeon.",
    unlockSteps: [
      "From Blackridge Pass Beacon, head northeast and take the left, upward path.",
      "Pass the spider-legged enemy to reach a Shattered Beacon.",
      "Enter the Beacon and interact with Proxima's body on the table.",
    ],
  },
  {
    slug: "smert",
    name: "Smert",
    description: "Halts time to stack chaos strikes that detonate at once.",
    confidence: "community",
    tags: ["Time stop", "Chaos stacks", "Burst"],
    start: "Stack chaos during time stop, then detonate for burst damage.",
    watch: "The ability costs resolve and can push into overtime.",
    source: "GameRant + Rock Paper Shotgun guides",
    image: "/images/shell-smert.jpg",
    howToUnlock:
      "Sacrifice blood at both empty ritual pools west of the Outskirts of Nochte Beacon, then claim Smert.",
    unlockSteps: [
      "From the Outskirts of Nochte Beacon, head west to a ritual ground with three circular pools.",
      "Sacrifice blood at both empty pools (each costs a full health state).",
      "Approach Smert to claim the Shell.",
    ],
  },
  {
    slug: "gragu",
    name: "Gragu",
    description: "A heavy brawler whose healing is earned through kills.",
    confidence: "community",
    tags: ["Brawler", "Kill-heal", "Aggression"],
    start: "Stay aggressive to refill healing through takedowns.",
    watch: "Passive healing starts weaker until upgraded.",
    source: "GameRant + Rock Paper Shotgun guides",
    image: "/images/shell-gragu.jpg",
    howToUnlock:
      "Bring the Heart of Vatra from the Temple of Vatra to Gragu in the One-Legged Wolf Tavern.",
    unlockSteps: [
      "Talk to Gragu at the One-Legged Wolf Tavern to learn he wants the Heart of Vatra.",
      "Head east through the Bone Gate to the Temple of Vatra and retrieve the Heart.",
      "Return and give the Heart to Gragu, then claim his Shell.",
    ],
  },
  {
    slug: "sester-genessa",
    name: "Sester Genessa",
    description: "Summons faithful doubles that copy your strikes.",
    confidence: "community",
    tags: ["Summons", "Doubles", "Sustain"],
    start: "Summon doubles to double your damage output safely.",
    watch: "Becoming stray changes how your healing works.",
    source: "GameRant + Rock Paper Shotgun guides",
    image: "/images/shell-sester-genessa.jpg",
    howToUnlock:
      "Defeat Sister Secundus near the Abbey Entrance Beacon, then bring the Sester's Censer to Genessa in Marrow Keep.",
    unlockSteps: [
      "Talk to Genessa in Marrow Keep to start her censer quest.",
      "In Revenant Graves, interact with the glowing censer to teleport to Sister Secundus.",
      "Defeat Sister Secundus, take the Sester's Censer back to Genessa, and watch her memory.",
    ],
  },
];

// Official links
export const links = {
  officialSite: "https://mortalshell.com/",
  steam: "https://store.steampowered.com/app/2584270/Mortal_Shell_II/",
  discord: "https://discord.com/invite/mortalshell",
  reddit: "https://www.reddit.com/r/MortalShell/",
  youtube: "https://www.youtube.com/channel/UCznkRchE04jrOPmlgPbfZyA",
  trailer: "https://www.youtube.com/watch?v=qHLY7zFhRvg",
};

export const home = {
  hero: {
    eyebrow: "Fan-Made Community Wiki",
    title: "Mortal Shell II",
    description:
      "Mortal Shell II is a standalone dark fantasy action RPG sequel built around fast, high-risk combat and free exploration. Possess warrior Shells, master strange weapons, dethrone false gods, and redeem a ravaged open world.",
    stats: [
      "Launches Aug 20, 2026",
      "8 Playable Shells",
      "60+ Dungeons",
      "PC, PS5 & Xbox Series X|S",
      "Devout Edition Early Access",
    ],
    primaryCta: "Start Beginner Guide",
    secondaryCta: "Find Tarstone Locations",
    tertiaryCta: "Compare Editions",
    videoLabel: "Official media",
  },
  start: {
    eyebrow: "Start Here",
    title: "Your Mortal Shell II Journey",
    cards: [
      {
        number: "1",
        title: "Beginner Guide",
        description:
          "Learn the core combat flow, Shell possession, exploration priorities, and the safest first steps before you commit to a build.",
      },
      {
        number: "2",
        title: "Tarstone Locations",
        description:
          "Track collectible Tarstones, route them efficiently, and avoid missing early beta and early access discoveries.",
      },
      {
        number: "3",
        title: "Shells and Characters",
        description:
          "Compare playable Shells, their roles, strengths, and upgrade direction so players can choose a combat style quickly.",
      },
      {
        number: "4",
        title: "Bosses and Trials",
        description:
          "Prepare for Tar Golem, trial areas, achievement objectives, and other high-friction encounters players search for first.",
      },
    ],
  },
  aboutGame: {
    title: "What is Mortal Shell II?",
    paragraphs: [
      "Mortal Shell II is a standalone sequel to Mortal Shell from Cold Symmetry and Playstack. It expands the original souls-like formula with a compact interconnected open world, faster combat, and warrior Shells players can possess.",
      "The game removes stamina restrictions, adds powerful sidearms and upgrade options, and pushes players toward aggressive precision combat. Whether players are checking early access timing, choosing an edition, finding Tarstones, or learning a boss route, the wiki should make every next step clear.",
    ],
    stats: [
      { label: "Developer", value: "Cold Symmetry" },
      { label: "Publisher", value: "Playstack" },
      { label: "Platform", value: "Steam, PS5, Xbox Series X|S" },
      { label: "Genre", value: "Action RPG, Souls-like" },
      { label: "Release Date", value: "Aug 20, 2026" },
      { label: "Early Access", value: "Aug 17, 2026 (Devout)" },
      { label: "User Reviews", value: "“Very Positive” (Steam)" },
      { label: "Core Content", value: "8 Shells, 60+ Dungeons" },
    ],
    cta: "Explore All Guides",
  },
  sidebarCodes: [],
  finalCta: {
    title: "Ready to Master Mortal Shell II?",
    description:
      "From early access prep to Shell builds, Tarstone routes, boss fights, and edition choices, this fan-made wiki helps you move through Mortal Shell II with fewer dead ends.",
    primary: "Read the Beginner Guide",
    secondary: "Play on Steam",
  },
};

export const footer = {
  aboutTitle: "Mortal Shell II Wiki",
  about:
    "Mortal Shell II Wiki is an independent fan-made guide hub for release info, editions, platforms, Shells, bosses, Tarstones, achievements, and early access updates. It is designed for players who want concise routes, quick answers, and practical guidance without digging through scattered posts. The site is not affiliated with Cold Symmetry or Playstack.",
  description:
    "Standalone dark fantasy action RPG sequel on Steam, PS5, and Xbox Series X|S. Fast combat, 8 playable Shells, and 60+ dungeons.",
  playGame: "Play Mortal Shell II",
  officialDiscord: "Official Discord",
  officialYoutube: "Official YouTube",
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service",
};

export const siteMetadata = {
  title: "Mortal Shell II Wiki — Guide, Release Date",
  description:
    "Mortal Shell II Wiki helps players track release dates, editions, platforms, Shells, bosses, Tarstones, achievements, and early access updates in one fan hub.",
  keywords: "Mortal Shell II, Steam, PS5, Xbox, wiki, guide, release date",
};
