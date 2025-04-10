
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-starPurple-900 via-starPurple-800 to-starPurple-900 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-starGold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-starTeal-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span>Book a star,</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-starGold-300 via-starGold-400 to-starGold-300">
              light up your event ✨
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Find and book talented local artists and performers for your next event. 
            From DJs to dancers, we've got the perfect star to make your occasion memorable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button className="w-full sm:w-auto bg-starTeal-600 hover:bg-starTeal-700 text-white px-8 py-6 text-lg">
              Find Artists
            </Button>
            <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Become a Star
            </Button>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="relative bg-white rounded-full shadow-lg flex items-center">
              <Search className="absolute left-4 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by talent, location, or event type..." 
                className="w-full py-4 px-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-starPurple-500"
              />
              <Button className="absolute right-1 rounded-full bg-starPurple-600 hover:bg-starPurple-700 px-6">
                Search
              </Button>
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm text-gray-300">
              <span>Popular:</span>
              <a href="#" className="hover:text-starGold-300 transition-colors">Wedding DJ</a>
              <a href="#" className="hover:text-starGold-300 transition-colors">Live Band</a>
              <a href="#" className="hover:text-starGold-300 transition-colors">Painter</a>
              <a href="#" className="hover:text-starGold-300 transition-colors">Dhol Player</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
