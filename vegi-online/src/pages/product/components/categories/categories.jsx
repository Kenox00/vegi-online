import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Categories = () => {
  const categoryData = {
    'Fruits': [
      'Fresh Fruits',
      'Organic Fruits',
      'Dried Fruits',
      'Seasonal Fruits'
    ],
    'Vegetables': [
      'Fresh Vegetables',
      'Organic Vegetables',
      'Leafy Greens',
      'Root Vegetables'
    ],
    'Dairy & Eggs': [
      'Milk & Cream',
      'Cheese',
      'Butter & Margarine',
      'Yogurt',
      'Eggs'
    ],
    'Meat & Seafood': [
      'Fresh Meat (Beef, Chicken, Pork, etc.)',
      'Fresh Seafood',
      'Deli Meats',
      'Frozen Meat & Seafood'
    ],
    'Bakery': [
      'Bread & Rolls',
      'Buns & Bagels',
      'Pastries',
      'Tortillas & Wraps'
    ],
    'Beverages': [
      'Water',
      'Juices',
      'Soft Drinks',
      'Tea & Coffee',
      'Energy & Sports Drinks'
    ]
  };

  const [expandedCategories, setExpandedCategories] = useState(
    Object.keys(categoryData).reduce((acc, category) => {
      acc[category] = true;
      return acc;
    }, {})
  );

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="max-w-xs w-64 bg-white shadow-sm rounded-lg ">
      <div className="p-4 border-b border-gray-200 bg-white w-1/7">
        <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
      </div>
      
      <div className="divide-y divide-gray-100 overflow-y-auto h-[80vh]">
        {Object.entries(categoryData).map(([category, items]) => (
          <div key={category} className="py-2">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full px-4 py-2 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-gray-700">{category}</span>
              {expandedCategories[category] ? (
                <ChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedCategories[category] && (
              <div className="pl-6 pr-4 py-1 space-y-1">
                {items.map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-2 py-1.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
