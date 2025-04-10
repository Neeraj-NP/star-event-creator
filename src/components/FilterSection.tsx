
import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, DollarSign } from 'lucide-react';
import { categories } from '@/data/categories';

const FilterSection = () => {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [rating, setRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-2 text-gray-700">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <Checkbox 
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => handleCategoryChange(category.id)}
                className="mr-2 border-gray-300"
              />
              <label 
                htmlFor={category.id}
                className="text-sm text-gray-600 cursor-pointer select-none"
              >
                {category.name} ({category.count})
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium text-gray-700">Price Range</h4>
          <div className="text-sm text-gray-600">
            <span className="font-medium">${priceRange[0]}</span> - <span className="font-medium">${priceRange[1]}</span>
          </div>
        </div>
        <Slider 
          defaultValue={[0, 2000]} 
          min={0} 
          max={3000}
          step={100}
          onValueChange={setPriceRange}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>$0</span>
          <span>$3000+</span>
        </div>
      </div>
      
      {/* Rating */}
      <div className="mb-6">
        <h4 className="font-medium mb-3 text-gray-700">Minimum Rating</h4>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`p-2 rounded-md transition-colors ${
                rating >= star ? 'text-starGold-500' : 'text-gray-300'
              }`}
            >
              <Star size={20} fill={rating >= star ? 'currentColor' : 'none'} />
            </button>
          ))}
        </div>
      </div>
      
      {/* Availability */}
      <div className="mb-4">
        <h4 className="font-medium mb-2 text-gray-700">Availability</h4>
        <div className="flex items-center">
          <Checkbox 
            id="available-now"
            className="mr-2 border-gray-300"
          />
          <label 
            htmlFor="available-now"
            className="text-sm text-gray-600 cursor-pointer select-none"
          >
            Available this weekend
          </label>
        </div>
      </div>
      
      {/* More Filters */}
      <div>
        <h4 className="font-medium mb-2 text-gray-700">More Filters</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox 
              id="verified"
              className="mr-2 border-gray-300"
            />
            <label 
              htmlFor="verified"
              className="text-sm text-gray-600 cursor-pointer select-none"
            >
              Verified Artists Only
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox 
              id="online"
              className="mr-2 border-gray-300"
            />
            <label 
              htmlFor="online"
              className="text-sm text-gray-600 cursor-pointer select-none"
            >
              Online Booking Available
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
