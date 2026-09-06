
// podcast

// src/data/episodes.ts

// src/data/episodes.ts
export interface Episode {
  episode: string;
  title: string;
  duration: string;
}

export const episodes: Episode[] = [
  { episode: "Episode 118", title: "How to Set Boundaries as a New Manager", duration: "34 min" },
  { episode: "Episode 117", title: "Giving Feedback People Actually Hear", duration: "28 min" },
  { episode: "Episode 116", title: "Running Your First 1:1 Meeting", duration: "31 min" },
  { episode: "Episode 115", title: "Delegating Without Losing Control", duration: "25 min" },
  { episode: "Episode 114", title: "When Your Former Peers Now Report to You", duration: "29 min" },
  { episode: "Episode 113", title: "Reading the Room in Difficult Conversations", duration: "22 min" },
  { episode: "Episode 112", title: "Why New Managers Avoid Conflict", duration: "27 min" },
];