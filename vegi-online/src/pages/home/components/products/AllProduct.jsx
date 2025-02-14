import { useState } from 'react';
import { useProducts } from '../../../../hooks/useProducts';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../../../hooks/useCart';

const AllProduct = () => {
  const { products: allProducts, setSelectedProduct } = useProducts();
  const { addToCart, removeFromCart } = useCart();
  const productsPerRow = 5;  // Based on the xl:grid-cols-5 setting
  const maxProducts = productsPerRow * 2;  // Two rows maximum
  const navigate = useNavigate();

  const categories = ["All Products", ...new Set(allProducts.map(product => product.category))];
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [products, setProducts] = useState(allProducts.slice(0, maxProducts));
  const [addedToCart, setAddedToCart] = useState([]);

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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <Link to="/products" className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <h1 className="text-xl font-semibold text-secondary">All Products</h1>
            <span className="text-primary">{allProducts.length}</span>
          </div>
          </Link>
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
                {addedToCart.includes(product.id) ? (
                  <button 
                    className="text-primary border borde-primary rounded-md w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    onClick={(e) => handleRemoveFromCart(e, product.id)}
                  >
                    X
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
        ))}
      </div>

      {/* See All Products Link */}
      {allProducts.length > maxProducts && (
        <Link to="/products" className=" text-black cursor-pointer hover:text-primary/80 transition-colors ">
        <div className="flex justify-end mt-6 cursor-pointer">
          <button className="flex items-center cursor-pointer text-black hover:text-primary/80 transition-colors">
            See All Products
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        </Link>
      )}
    </div>
  );
};

export default AllProduct;