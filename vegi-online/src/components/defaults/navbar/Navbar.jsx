import { useState, useEffect } from "react";
import { Search, Menu, X, Phone } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../../assets/images/navbar/Logo.png";
import cart from "../../../assets/images/navbar/cart.png";
import user from "../../../assets/images/navbar/user.png";
import flower from "../../../assets/images/navbar/flower.png";
import { useCart } from "../../../hooks/useCart";
import UserDropdown from "./UserDropdown";
import CategoriesDropdown from "./CategoriesDropdown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, totalPrice } = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  // Sync search query with URL parameters
  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);

    if (searchQuery.trim()) {
      newParams.set("search", searchQuery.trim());
    } else {
      newParams.delete("search");
    }

    navigate(`/products?${newParams.toString()}`);
  };

  return (
    <div className="w-full">
      {/* Upper Nav */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Mobile Menu Button and Logo */}
        <div className="flex lg:hidden justify-between items-center mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 hover:text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/">
            <img src={logo} alt="Vegi Online Logo" className="h-6 sm:h-8" />
          </Link>
          <Link to="/products/cart" className="relative">
            <img
              src={cart}
              alt="cart"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            />
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 xl:gap-8 flex-1">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img
                  src={logo}
                  alt="Vegi Online Logo"
                  className="h-8 xl:h-10"
                />
              </Link>
              <CategoriesDropdown />
            </div>

            {/* Search Form */}
            <form className="flex-1 max-w-xl" onSubmit={handleSearch}>
              <div className="relative flex items-center w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products"
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                />
                <button
                  type="submit"
                  className="absolute right-3 text-gray-400 hover:text-gray-600"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            <div className="flex items-center gap-2 hover:text-secondary cursor-pointer">
              <div className="w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center">
                <Phone className="w-5 h-5 lg:w- lg:h-6 xl:w-7 xl:h-7 text-secondary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Contact</p>
                <p className="font-medium text-sm sm:text-base">0782665552</p>
              </div>
            </div>

            <Link
              to="/products/cart"
              className="flex items-center gap-2 hover:text-secondary cursor-pointer"
            >
              <div className="w-8 h-8 xl:w-10 xl:h-10 relative flex items-center justify-center">
                <img
                  src={cart}
                  alt=""
                  className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
                />
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">My Cart</p>
                <p className="font-medium text-sm sm:text-base">
                  {totalPrice.toLocaleString()} Rwf
                </p>
              </div>
            </Link>

            <UserDropdown />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 lg:hidden">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white border-t`}
      >
        <div className="px-4 py-2 space-y-4">
          <nav>
            <ul className="space-y-2">
              {["Fruits", "Vegetables", "Dairy & Eggs", "New in", "Offers"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-gray-700 py-2 border-b hover:text-secondary cursor-pointer"
                  >
                    <Link to={`/products?category=${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="space-y-4">
            <div className="flex items-center gap-2 py-2 hover:text-green-600 cursor-pointer">
              <img src={user} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Account</span>
            </div>
            <div className="flex items-center gap-2 py-2 hover:text-green-600 cursor-pointer">
              <Phone className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-secondary" />
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Nav */}
      <div className="border-t border-b border-gray-300 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <nav>
              <ul className="flex gap-4 xl:gap-8 py-4">
                {[
                  "Fruits",
                  "Vegetables",
                  "Dairy & Eggs",
                  "New in",
                  "Offers",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-700 hover:text-secondary cursor-pointer whitespace-nowrap"
                  >
                    <Link to={`/products?category=${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button className="flex items-center gap-2 bg-secondary hover:bg-tertiary transition-colors text-white px-4 py-2 cursor-pointer">
              <img
                src={flower}
                alt="Flower"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="whitespace-nowrap">Gifts & Flowers</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Gift & Flowers Button */}
      <div className="lg:hidden px-4 py-3 border-t">
        <button className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-tertiary transition-colors text-white px-4 py-2 cursor-pointer rounded">
          <img src={flower} alt="Flower" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Gifts & Flowers</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
