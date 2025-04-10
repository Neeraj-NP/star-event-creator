
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "dj",
    name: "DJs",
    icon: "🎧",
    description: "Professional DJs for parties and events",
    count: 48
  },
  {
    id: "singer",
    name: "Singers",
    icon: "🎤",
    description: "Talented vocalists for your special occasion",
    count: 67
  },
  {
    id: "dancer",
    name: "Dancers",
    icon: "💃",
    description: "Skilled dancers of various styles",
    count: 35
  },
  {
    id: "band",
    name: "Bands",
    icon: "🎸",
    description: "Live music bands for any venue",
    count: 29
  },
  {
    id: "comedian",
    name: "Comedians",
    icon: "😂",
    description: "Stand-up comedians to entertain your guests",
    count: 18
  },
  {
    id: "painter",
    name: "Painters",
    icon: "🎨",
    description: "Live painters for artistic flair",
    count: 24
  },
  {
    id: "cultural",
    name: "Cultural Artists",
    icon: "🪘",
    description: "Traditional and cultural performers",
    count: 32
  },
  {
    id: "dhol",
    name: "Dhol Players",
    icon: "🥁",
    description: "Energetic dhol players for celebrations",
    count: 15
  }
];
