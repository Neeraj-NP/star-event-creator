
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-starPurple-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">Book</span>
                <span className="text-starGold-400">a</span>
                <span className="text-white">Star</span>
                <span className="text-starGold-400">✨</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              The premier platform for booking local artists and performers for your events.
              Making talent accessible to everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-starGold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-starGold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-starGold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-starGold-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-starGold-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-starGold-400 transition-colors">Browse Artists</a>
              </li>
              <li>
                <a href="#" className="hover:text-starGold-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="hover:text-starGold-400 transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#" className="hover:text-starGold-400 transition-colors">Become an Artist</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-starGold-400 transition-colors">DJs & Musicians</a>
              </li>
              <li>
                <a href="#" className="hover:text-starGold-400 transition-colors">Singers & Vocalists</a>
              </li>
              <li>
                <a href="#" className="hover:text-starGold-400 transition-colors">Dance Performers</a>
              </li>
              <li>
                <a href="#" className="hover:text-starGold-400 transition-colors">Visual Artists</a>
              </li>
              <li>
                <a href="#" className="hover:text-starGold-400 transition-colors">Cultural Artists</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>support@bookastar.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-starPurple-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-starGold-400 w-full"
                />
                <button className="bg-starGold-500 hover:bg-starGold-600 text-starGold-900 px-3 py-2 rounded-r-md transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer - Copyright */}
        <div className="border-t border-starPurple-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} BookAStar. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400 mt-2 md:mt-0">
              <a href="#" className="hover:text-starGold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-starGold-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
