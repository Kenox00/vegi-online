import { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useProducts } from "../../../../hooks/useProducts";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";

const ProductPage = () => {
  const { products, setSelectedProduct } = useProducts();
  const { addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [addedToCart, setAddedToCart] = useState([]);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    const searchQuery = searchParams.get('search')?.toLowerCase().trim() || '';
    const category = searchParams.get('category')?.toLowerCase().trim() || '';
    const subcategory = searchParams.get('subcategory')?.toLowerCase().trim() || '';

    return products.filter(product => {
      const matchesSearch = searchQuery ?
        (product.name?.toLowerCase().includes(searchQuery) ||
        product.description?.toLowerCase().includes(searchQuery) ||
        product.category?.toLowerCase().includes(searchQuery)) : true;

      const matchesCategory = category ?
        product.category?.toLowerCase() === category : true;

      const matchesSubcategory = subcategory ?
        product.subcategory?.toLowerCase() === subcategory : true;

      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [products, searchParams]);

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
    setAddedToCart(addedToCart.filter((id) => id !== productId));
  };

  const getHeaderText = () => {
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    
    if (search) return `Search results for "${search}"`;
    if (category) return `${category} Products`;
    return 'Recommended Products';
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-hide h-[80vh]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          {getHeaderText()}
        </h2>
        {filteredProducts.length > 0 && (
          <button
            className="flex items-center text-secondary hover:text-tertiary/80 transition-colors"
            onClick={() => navigate('/products')}
          >
            See All Products
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 hover:shadow-md transition-all duration-300 cursor-pointer border-b border-gray-200 "
              onClick={() => handleProductClick(product)}
            >
              <div className="aspect-square mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="text-secondary text-sm">{product.category}</p>
                <p className="font-medium text-gray-800">{product.name}</p>
                <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{product.price}</span>
                  <span className="p-1 text-sm text-black bg-gray-100 rounded-md">
                    Rwf
                  </span>
                </div>
                {addedToCart.includes(product.id) ? (
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
      )}
    </div>
  );
};

export default ProductPage;