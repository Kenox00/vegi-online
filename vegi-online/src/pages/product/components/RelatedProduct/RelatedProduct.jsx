import { useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useProducts } from '../../../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../../hooks/useCart';

const RelatedProduct = () => {
  const { products: allProducts, selectedProduct, setSelectedProduct } = useProducts();
  const { addToCart, removeFromCart, cartItems } = useCart();
  const navigate = useNavigate();
  const carouselRef = useRef(null);

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
  };

  const handleRemoveFromCart = (e, productId) => {
    e.stopPropagation();
    removeFromCart(productId);
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  // Handle edge case when there are no related products
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-900">Related Products</h2>
          <p className="text-sm text-gray-500">
            More items from {selectedProduct?.category}
          </p>
        </div>
        
        {relatedProducts.length > 1 && (
          <div className="flex gap-2">
            <button 
              onClick={() => scrollCarousel(-1)}
              className="bg-white rounded-full p-2 shadow-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={() => scrollCarousel(1)}
              className="bg-white rounded-full p-2 shadow-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        <div ref={carouselRef} className="flex gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-hide">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer snap-center min-w-[50%] sm:min-w-[50%] md:min-w-[33%] lg:min-w-[25%] xl:min-w-[20%]"
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
                  {cartItems.some(item => item.product.id === product.id) ? (
                    <button 
                      className="text-secondary border border-secondary rounded-md w-8 h-8 flex items-center justify-center hover:bg-tertiary hover:text-white transition-colors"
                      onClick={(e) => handleRemoveFromCart(e, product.id)}
                    >
                      X
                    </button>
                  ) : (
                    <button 
                      className="text-secondary border border-secondary rounded-md w-8 h-8 flex items-center justify-center hover:bg-tertiary hover:text-white transition-colors"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;