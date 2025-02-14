import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useProducts } from '../../../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../../hooks/useCart';

const RelatedProduct = () => {
  const { products: allProducts, selectedProduct, setSelectedProduct } = useProducts();
  const { addToCart, removeFromCart } = useCart();
  const [startIndex, setStartIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState([]);
  const navigate = useNavigate();

  // Filter related products based on the selected product's category
  const relatedProducts = useMemo(() => {
    if (!selectedProduct) return [];
    
    return allProducts.filter(product => 
      product.category === selectedProduct.category && 
      product.id !== selectedProduct.id
    );
  }, [allProducts, selectedProduct]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate(`/products/details?id=${product.id}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedToCart([...addedToCart, product.id]);
  };

  const handleRemoveFromCart = (e, productId) => {
    e.stopPropagation();
    removeFromCart(productId);
    setAddedToCart(addedToCart.filter(id => id !== productId));
  };

  // Handle edge case when there are no related products
  if (relatedProducts.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex + 1 >= relatedProducts.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex - 1 < 0 ? relatedProducts.length - 1 : prevIndex - 1
    );
  };

  // Calculate visible products based on screen size
  const getVisibleProducts = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1536) return 5; // 2xl
    if (screenWidth >= 1280) return 5; // xl
    if (screenWidth >= 1024) return 4; // lg
    if (screenWidth >= 768) return 3; // md
    if (screenWidth >= 640) return 2; // sm
    return 1; // xs
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-900">Related Products</h2>
          <p className="text-sm text-gray-500">
            More items from {selectedProduct?.category}
          </p>
        </div>
        
        {relatedProducts.length > getVisibleProducts() && (
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
        )}
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {relatedProducts.map((product, index) => {
            const position = (index - startIndex + relatedProducts.length) % relatedProducts.length;
            const isVisible = position < getVisibleProducts();

            if (!isVisible) return null;

            return (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
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
                  <p className="text-gray-500 text-sm">{product.category}</p>
                  <p className="font-medium text-gray-800 line-clamp-1">{product.name}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">{product.price}</span>
                      <span className="p-1 text-sm text-black bg-gray-100 rounded-md">Rwf</span>
                    </div>
                    {addedToCart.includes(product.id) ? (
                      <button 
                        className="text-red-500 border border-red-500 rounded-md w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                        onClick={(e) => handleRemoveFromCart(e, product.id)}
                      >
                        ❌
                      </button>
                    ) : (
                      <button 
                        className="text-primary border border-primary rounded-md w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        +
                      </button>
                    )}
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

export default RelatedProduct;