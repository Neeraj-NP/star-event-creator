
import React from 'react';
import { Star, MapPin, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Artist } from '@/data/artists';
import { Badge } from '@/components/ui/badge';

interface ArtistCardProps {
  artist: Artist;
  featured?: boolean;
}

const ArtistCard = ({ artist, featured = false }: ArtistCardProps) => {
  return (
    <div 
      className={cn(
        "card-hover bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md",
        featured && "ring-2 ring-starGold-400 ring-offset-2"
      )}
    >
      {/* Artist Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={artist.profileImage} 
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        
        {featured && (
          <Badge className="absolute top-3 right-3 bg-starGold-500 text-starGold-900 hover:bg-starGold-500">
            Featured Star
          </Badge>
        )}
        
        {artist.verified && (
          <Badge className="absolute top-3 left-3 bg-starPurple-600 hover:bg-starPurple-600">
            <Check size={14} className="mr-1" /> Verified
          </Badge>
        )}
      </div>
      
      {/* Artist Info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-starPurple-800">{artist.name}</h3>
          <div className="flex items-center">
            <Star size={16} className="text-starGold-500 fill-starGold-500" />
            <span className="ml-1 text-gray-700">{artist.rating}</span>
            <span className="ml-1 text-gray-500 text-sm">({artist.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3 text-sm">
          <MapPin size={14} className="mr-1" />
          <span>{artist.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{artist.bio}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-starPurple-700 font-semibold">{artist.priceRange}</div>
          <button className="px-3 py-1 bg-starPurple-600 text-white rounded-full text-sm hover:bg-starPurple-700 transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
