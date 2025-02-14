import { ChevronRight } from 'lucide-react';
import { useProducts } from '../../../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const { products, setSelectedProduct } = useProducts();
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate(`/products/details?id=${product.id}`);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recommended Products</h2>
        <button className="flex items-center text-primary hover:text-primary/80 transition-colors">
          See All Products
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleProductClick(product)}
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
                <button 
                  className="text-primary border border-primary rounded-md w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart logic here
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;