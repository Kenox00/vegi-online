import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 xl:p-3 text-gray-700 font-medium flex items-center gap-2 border border-gray-300 hover:border-gray-400 transition-colors"
      >
        All Categories
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full left-0 w-64 mt-1 bg-white border border-gray-200 shadow-lg rounded-md">
          <div className="py-2">
            {Object.entries(categoryData).map(([category, subcategories]) => (
              <div key={category} className="group">
                <Link
                  to={`/products?category=${encodeURIComponent(category.toLowerCase())}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-secondary font-medium"
                >
                  {category}
                </Link>
                <div className="hidden group-hover:block absolute left-full top-0 w-64 bg-white border border-gray-200 shadow-lg rounded-md ml-1">
                  <div className="py-2">
                    {subcategories.map((subcategory) => (
                      <Link
                        key={subcategory}
                        to={`/products?category=${encodeURIComponent(category.toLowerCase())}&subcategory=${encodeURIComponent(subcategory)}`}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-secondary"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;