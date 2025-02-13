import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import logo from '../../../assets/images/navbar/Logo.png';
import phone from '../../../assets/images/navbar/Phone.png';
import cart from '../../../assets/images/navbar/cart.png';
import user from '../../../assets/images/navbar/user.png';
import flower from '../../../assets/images/navbar/flower.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <img src={logo} alt="Vegi Online Logo" className="h-8 sm:h-10 max-w-[120px] w-auto" />
          <div className="relative">
            <img 
              src={cart} 
              alt="cart" 
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center gap-4">
          {/* Logo & Search */}
          <div className="flex items-center gap-4 xl:gap-8 flex-1">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Vegi Online Logo" className="h-10 xl:h-12 max-w-[150px] w-auto" />
              <button className="p-2 xl:p-3 text-gray-700 font-medium hidden md:flex items-center gap-2 border border-gray-300 hover:border-gray-400 transition-colors">
                All Categories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Search */}
            <div className="flex-1 max-w-xl">
              <div className="relative flex items-center w-full">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-full px-4 py-2 pr-10 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <Search className="absolute right-3 text-gray-400" size={20} />
              </div>
            </div>
          </div>

          {/* Contact, Cart, Account */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
              <img src={phone} alt="phone" className="w-7 h-7 xl:w-8 xl:h-8" />
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Contact</p>
                <p className="font-medium text-sm sm:text-base">0782665552</p>
              </div>
            </div>

            <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
              <div className="relative flex items-center justify-center">
                <img src={cart} alt="cart" className="w-7 h-7 xl:w-8 xl:h-8" />
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">My Cart</p>
                <p className="font-medium text-sm sm:text-base">00rw</p>
              </div>
            </div>

            <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
              <img src={user} alt="user" className="w-7 h-7 xl:w-8 xl:h-8" />
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Account</p>
                <p className="font-medium text-sm sm:text-base">Log in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t`}>
        <div className="px-4 py-2 space-y-4">
          <nav>
            <ul className="space-y-2">
              {['Fruits', 'Vegetables', 'Diary&eggs', 'New in', 'Offers'].map((item) => (
                <li key={item} className="text-gray-700 py-2 border-b hover:text-green-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-4">
            <div className="flex items-center gap-2 py-2 hover:text-green-600 cursor-pointer">
              <img src={user} alt="user" className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>Account</span>
            </div>
            <div className="flex items-center gap-2 py-2 hover:text-green-600 cursor-pointer">
              <img src={phone} alt="phone" className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Gift & Flowers Button */}
      <div className="lg:hidden px-4 py-3 border-t">
        <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white px-4 py-2 rounded">
          <img src={flower} alt="Flower" className="w-6 h-6 sm:w-7 sm:h-7" />
          <span>Gifts & Flowers</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
