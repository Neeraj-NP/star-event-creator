
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import CategorySection from '@/components/CategorySection';
import ArtistCard from '@/components/ArtistCard';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { getPopularArtists, getFeaturedArtists } from '@/data/artists';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Index = () => {
  const popularArtists = getPopularArtists(6);
  const featuredArtists = getFeaturedArtists();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Category Section */}
        <CategorySection />
        
        {/* Featured Artists Section */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-starPurple-100 text-starPurple-700 rounded-full text-sm font-medium mb-3">Featured</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Stars</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These exceptional talents have been handpicked for their outstanding performances and top-tier reviews
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} featured={true} />
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-starGold-100 text-starGold-700 rounded-full text-sm font-medium mb-3">Simple Process</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Booking your perfect artist for any event is quick and easy with our streamlined process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-starPurple-100 rounded-full flex items-center justify-center text-starPurple-700 font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Browse Artists</h3>
                <p className="text-gray-600">
                  Explore our diverse selection of talented artists and performers in various categories
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-starPurple-100 rounded-full flex items-center justify-center text-starPurple-700 font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Contact & Book</h3>
                <p className="text-gray-600">
                  Check availability, discuss details, and secure your booking with your chosen artist
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-starPurple-100 rounded-full flex items-center justify-center text-starPurple-700 font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Enjoy Your Event</h3>
                <p className="text-gray-600">
                  Sit back and enjoy as your chosen talent lights up your event with their performance
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Popular Artists Section */}
        <section id="artists" className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-starTeal-100 text-starTeal-700 rounded-full text-sm font-medium mb-3">Top Rated</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Artists</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our most booked and highest-rated performers across all categories
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {popularArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
            
            <div className="text-center">
              <Button className="bg-starPurple-600 hover:bg-starPurple-700 px-8">
                View All Artists
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-starPurple-100 text-starPurple-700 rounded-full text-sm font-medium mb-3">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Read about the amazing experiences our customers have had with our talented artists
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-starGold-500">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The DJ we booked was absolutely fantastic! He read the room perfectly and kept everyone dancing all night long. Will definitely book through this platform again!"
                </p>
                <div className="font-medium">Sarah T.</div>
                <div className="text-sm text-gray-500">Wedding Reception</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-starGold-500">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "We hired a live painter for our corporate event and our guests were amazed watching her create a beautiful piece throughout the evening. A unique experience!"
                </p>
                <div className="font-medium">Michael K.</div>
                <div className="text-sm text-gray-500">Corporate Gala</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-starGold-500">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The cultural dance group we booked brought so much energy and authenticity to our multicultural festival. They were professional and incredibly talented!"
                </p>
                <div className="font-medium">Priya M.</div>
                <div className="text-sm text-gray-500">Community Festival</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="about" className="section-padding bg-starPurple-900 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-starGold-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-20 w-60 h-60 bg-starTeal-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Your Event Unforgettable?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of event organizers who have found their perfect artist match through our platform
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-starGold-500 hover:bg-starGold-600 text-starGold-900 px-8 py-6 text-lg">
                  Find Your Star
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-starTeal-100 text-starTeal-700 rounded-full text-sm font-medium mb-3">Get In Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our team is here to help with any questions about booking artists or joining our platform
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <p>
                      <span className="font-medium">Email:</span> support@bookastar.com
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span> +1 (555) 123-4567
                    </p>
                    <p>
                      <span className="font-medium">Hours:</span> Monday-Friday, 9AM-6PM EST
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-starPurple-100 text-starPurple-700 rounded-full hover:bg-starPurple-200 transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="p-2 bg-starPurple-100 text-starPurple-700 rounded-full hover:bg-starPurple-200 transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="p-2 bg-starPurple-100 text-starPurple-700 rounded-full hover:bg-starPurple-200 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="p-2 bg-starPurple-100 text-starPurple-700 rounded-full hover:bg-starPurple-200 transition-colors">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                  <form>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-starPurple-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-starPurple-500" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-starPurple-500" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-starPurple-500"></textarea>
                    </div>
                    <Button className="w-full bg-starPurple-600 hover:bg-starPurple-700">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
