
export interface Artist {
  id: string;
  name: string;
  categoryId: string;
  profileImage: string;
  bio: string;
  location: string;
  priceRange: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  featured: boolean;
}

export const artists: Artist[] = [
  {
    id: "a1",
    name: "DJ Harmony",
    categoryId: "dj",
    profileImage: "https://images.unsplash.com/photo-1601993100676-aa057066fe3d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGp8fHx8fHwxNzEyNzQ3MjI0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    bio: "Rocking parties for over 10 years with electrifying EDM, house, and hip-hop mixes.",
    location: "New York, NY",
    priceRange: "$500-$1000",
    rating: 4.8,
    reviewCount: 124,
    verified: true,
    featured: true
  },
  {
    id: "a2",
    name: "Aria Rose",
    categoryId: "singer",
    profileImage: "https://images.unsplash.com/photo-1516218313771-5d4040afe6c7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c2luZ2VyfHx8fHx8MTcxMjc0NzI1OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    bio: "Versatile vocalist with a soulful touch. Perfect for weddings and corporate events.",
    location: "Los Angeles, CA",
    priceRange: "$300-$800",
    rating: 4.9,
    reviewCount: 86,
    verified: true,
    featured: true
  },
  {
    id: "a3",
    name: "Rhythm Crew",
    categoryId: "dancer",
    profileImage: "https://images.unsplash.com/photo-1547153760-18fc86324498?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGFuY2VyfHx8fHx8MTcxMjc0NzMwMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    bio: "High-energy dance troupe specializing in contemporary, hip-hop, and fusion styles.",
    location: "Miami, FL",
    priceRange: "$600-$1500",
    rating: 4.7,
    reviewCount: 58,
    verified: true,
    featured: false
  },
  {
    id: "a4",
    name: "Sunset Melodies",
    categoryId: "band",
    profileImage: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFuZHx8fHx8fDE3MTI3NDczMzI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    bio: "Versatile 5-piece band covering hits from the 70s to today's chart-toppers.",
    location: "Austin, TX",
    priceRange: "$800-$2000",
    rating: 4.6,
    reviewCount: 42,
    verified: true,
    featured: false
  },
  {
    id: "a5",
    name: "Alex Laughs",
    categoryId: "comedian",
    profileImage: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tZWRpYW58fHx8fHwxNzEyNzQ3MzU1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    bio: "Clean comedian perfect for corporate events and family gatherings.",
    location: "Chicago, IL",
    priceRange: "$400-$900",
    rating: 4.5,
    reviewCount: 29,
    verified: true,
    featured: false
  },
  {
    id: "a6",
    name: "Canvas Dreams",
    categoryId: "painter",
    profileImage: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRlcnx8fHx8fDE3MTI3NDczODM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    bio: "Live event painter capturing your special moments on canvas in real-time.",
    location: "Portland, OR",
    priceRange: "$350-$700",
    rating: 4.8,
    reviewCount: 19,
    verified: true,
    featured: true
  },
  {
    id: "a7",
    name: "Folk Fusion",
    categoryId: "cultural",
    profileImage: "https://images.unsplash.com/photo-1516307053558-712b23848e3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9sa3x8fHx8fDE3MTI3NDc0MTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    bio: "Traditional folk dancers and musicians celebrating cultural heritage through performance.",
    location: "San Francisco, CA",
    priceRange: "$500-$1200",
    rating: 4.9,
    reviewCount: 23,
    verified: true,
    featured: false
  },
  {
    id: "a8",
    name: "Dhol Beats",
    categoryId: "dhol",
    profileImage: "https://images.unsplash.com/photo-1508025690366-03a0c821eca2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHJ1bXx8fHx8fDE3MTI3NDc0MzM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    bio: "Energetic dhol players to add excitement to your weddings and celebrations.",
    location: "Atlanta, GA",
    priceRange: "$300-$600",
    rating: 4.7,
    reviewCount: 31,
    verified: true,
    featured: false
  }
];

export const getFeaturedArtists = () => {
  return artists.filter(artist => artist.featured);
};

export const getArtistsByCategory = (categoryId: string) => {
  return artists.filter(artist => artist.categoryId === categoryId);
};

export const getPopularArtists = (limit: number = 6) => {
  return [...artists].sort((a, b) => b.rating - a.rating).slice(0, limit);
};
