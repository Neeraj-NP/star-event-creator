
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by name or keyword..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-starPurple-500"
          />
        </div>
        
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Location..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-starPurple-500"
          />
        </div>
        
        <Button 
          className="whitespace-nowrap bg-starPurple-600 hover:bg-starPurple-700"
        >
          <Search size={18} className="mr-2" /> Search
        </Button>
        
        <Button 
          variant="outline"
          className="whitespace-nowrap border-gray-200 text-gray-700 hover:bg-gray-50"
        >
          <Filter size={18} className="mr-2" /> Filters
        </Button>
      </div>
    </div>
  );
};

// Import missing components
import { MapPin } from 'lucide-react';

export default SearchBar;
