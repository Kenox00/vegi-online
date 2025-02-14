import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useProducts } from '../../../../hooks/useProducts';

const FreshSales = () => {
  const { products: allProducts } = useProducts();
  const [startIndex, setStartIndex] = useState(0);
  
  // Define responsive display configuration
  const itemsToShow = {
    sm: 1,
    md: 4,
    lg: 5,
    xl: 7,
    '2xl': 5
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex + 1 >= allProducts.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex - 1 < 0 ? allProducts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-secondary">Flash Sales</h2>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="bg-white rounded-full p-2 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="bg-white rounded-full p-2 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-hidden">
          {allProducts.map((product, index) => {
            const position = (index - startIndex + allProducts.length) % allProducts.length;
            return (
              <div
                key={product.id}
                className={`bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer
                  ${position >= Object.values(itemsToShow)[Math.min(4, Math.floor(window.innerWidth / 640))] ? 'hidden' : ''}`}
              >
                <div className="aspect-square mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-secondary text-sm">{product.category}</p>
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">{product.price}</span>
                      <span className="p-1 text-sm text-black bg-gray-100 rounded-md">Rwf</span>
                    </div>
                    <button className="text-primary border border-primary rounded-md w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FreshSales;