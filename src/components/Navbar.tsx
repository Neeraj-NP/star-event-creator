
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-starPurple-700">
                <span className="text-starPurple-600">Book</span>
                <span className="text-starGold-500">a</span>
                <span className="text-starPurple-600">Star</span>
                <span className="text-starGold-500">✨</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#categories" className="text-gray-700 hover:text-starPurple-600 transition-colors">Categories</a>
            <a href="#artists" className="text-gray-700 hover:text-starPurple-600 transition-colors">Artists</a>
            <a href="#about" className="text-gray-700 hover:text-starPurple-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-starPurple-600 transition-colors">Contact</a>
            <div className="ml-2 flex items-center space-x-2">
              <Button variant="outline" className="border-starPurple-600 text-starPurple-600 hover:bg-starPurple-50">Sign In</Button>
              <Button className="bg-starPurple-600 hover:bg-starPurple-700">Register</Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-starPurple-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 animate-fade-in">
            <a href="#categories" className="block py-2 px-4 text-gray-700 hover:bg-starPurple-50 rounded-md">Categories</a>
            <a href="#artists" className="block py-2 px-4 text-gray-700 hover:bg-starPurple-50 rounded-md">Artists</a>
            <a href="#about" className="block py-2 px-4 text-gray-700 hover:bg-starPurple-50 rounded-md">About</a>
            <a href="#contact" className="block py-2 px-4 text-gray-700 hover:bg-starPurple-50 rounded-md">Contact</a>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="border-starPurple-600 text-starPurple-600 hover:bg-starPurple-50">Sign In</Button>
              <Button className="bg-starPurple-600 hover:bg-starPurple-700">Register</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
