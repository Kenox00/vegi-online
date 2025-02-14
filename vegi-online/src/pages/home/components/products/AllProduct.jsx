import { useState } from 'react';
import { useProducts } from '../../../../hooks/useProducts';
import { ChevronRight } from 'lucide-react';

const AllProduct = () => {
  const { products: allProducts } = useProducts();
  const productsPerRow = 5;  // Based on the xl:grid-cols-5 setting
  const maxProducts = productsPerRow * 2;  // Two rows maximum
  
  const categories = ["All Products", ...new Set(allProducts.map(product => product.category))];
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [products, setProducts] = useState(allProducts.slice(0, maxProducts));

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All Products") {
      setProducts(allProducts.slice(0, maxProducts));
    } else {
      const filteredProducts = allProducts
        .filter(product => product.category === category)
        .slice(0, maxProducts);
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <h1 className="text-xl font-semibold text-secondary">All Products</h1>
            <span className="text-primary">{allProducts.length}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  category === selectedCategory
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
                <button className="text-primary border border-primary rounded-md w-8 h-8 flex items-center justify-center hover:bg-orange-400 hover:text-white transition-colors">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All Products Link */}
      {allProducts.length > maxProducts && (
        <div className="flex justify-end mt-6">
          <button className="flex items-center text-primary hover:text-primary/80 transition-colors">
            See All Products
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProduct;