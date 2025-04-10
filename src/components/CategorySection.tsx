
import React from 'react';
import { categories } from '@/data/categories';

const CategorySection = () => {
  return (
    <section id="categories" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of talented performers and artists ready to make your event unforgettable
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="card-hover bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden"
            >
              <a href={`#${category.id}`} className="block p-6 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 text-starPurple-800">{category.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{category.description}</p>
                <div className="text-starPurple-600 font-medium text-sm">{category.count} Artists</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
