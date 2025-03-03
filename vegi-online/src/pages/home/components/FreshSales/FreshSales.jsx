import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProducts } from "../../../../hooks/useProducts";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";

const FreshSales = () => {
  const { products: allProducts, setSelectedProduct } = useProducts();
  const { addToCart, removeFromCart } = useCart();
  const [addedToCart, setAddedToCart] = useState([]);
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1280) setItemsToShow(5);
      else if (window.innerWidth >= 1024) setItemsToShow(4);
      else if (window.innerWidth >= 768) setItemsToShow(3);
      else if (window.innerWidth >= 640) setItemsToShow(2);
      else setItemsToShow(1);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

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

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="div-container">
      <div className="flex justify-between items-center mb-6">
        <Link to={`/products`}>
          <h2 className="text-xl font-semibold text-secondary">Flash Sales</h2>
        </Link>
        <div className=" md:flex gap-2">
          <button onClick={() => scrollCarousel(-1)} className="bg-white rounded-full p-2 shadow-sm hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button onClick={() => scrollCarousel(1)} className="bg-white rounded-full p-2 shadow-sm hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div ref={carouselRef} className={`flex gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-hide`} style={
          {scrollbar: 0}
        }>
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4  hover:shadow-md transition-all duration-300 cursor-pointer snap-center min-w-[50%] sm:min-w-[50%] md:min-w-[33%] lg:min-w-[25%] xl:min-w-[20%]"
              onClick={() => handleProductClick(product)}
            >
              <div className="aspect-square mb-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover " />
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

export default FreshSales;