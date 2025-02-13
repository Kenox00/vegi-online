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
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden justify-between items-center mb-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <img src="/api/placeholder/120/40" alt="Vegi Online Logo" className="h-8" />
          <img src={cart} alt="cart" />
        </div>

        <div className="hidden lg:flex justify-between items-center gap-4">
          {/* Logo & Search */}
          <div className="flex items-center gap-8 flex-1">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img src={logo} alt="Vegi Online Logo" className="h-10" />
              <button className="p-3 text-gray-700 font-medium hidden md:flex items-center gap-2 border border-gray-300">
                All Categories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {/* Search */}
            <div className="flex-1 max-w-xl">
              <div className="flex justify-between items-center gap-3 w-96 px-4 py-2 border border-gray-300 ">
              <Search className=" right-3 top-2.5 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-full focus:outline-none "
                />
              </div>
            </div>
          </div>

          {/* Contact, Cart, Account */}
          <div className="hidden lg:flex items-center gap-8 ml-8">
            {/* Contact */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-transparent flex items-center justify-center">
                <img src={phone} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Contact</p>
                <p className="font-medium">0782665552</p>
              </div>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-transparent  flex items-center justify-center">
                <img src={cart} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-500">My Cart</p>
                <p className="font-medium">00rw</p>
              </div>
            </div>

            {/* Account */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-transparent flex items-center justify-center">
                <img src={user} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Account</p>
                <p className="font-medium">Log in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 lg:hidden">
          <div className="relative">
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for products"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t`}>
        <div className="px-4 py-2 space-y-4">
          <nav>
            <ul className="space-y-2">
              <li className="text-gray-700 py-2 border-b">Fruits</li>
              <li className="text-gray-700 py-2 border-b">Vegetables</li>
              <li className="text-gray-700 py-2 border-b">Diary&eggs</li>
              <li className="text-gray-700 py-2 border-b">New in</li>
              <li className="text-gray-700 py-2 border-b">Offers</li>
            </ul>
          </nav>
          <div className="space-y-4">
            <div className="flex items-center gap-2 py-2">
            <img src={user} alt="" />
              <span>Account</span>
            </div>
            <div className="flex items-center gap-2 py-2">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Nav */}
      <div className="border-t border-b border-gray-300 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Navigation Links */}
            <nav>
              <ul className="flex gap-8 py-4">
                <li className="text-gray-700 hover:text-green-600 cursor-pointer">Fruits</li>
                <li className="text-gray-700 hover:text-green-600 cursor-pointer">Vegetables</li>
                <li className="text-gray-700 hover:text-green-600 cursor-pointer">Diary&eggs</li>
                <li className="text-gray-700 hover:text-green-600 cursor-pointer">New in</li>
                <li className="text-gray-700 hover:text-green-600 cursor-pointer">Offers</li>
              </ul>
            </nav>

            {/* Gift & Flowers Button */}
            <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2">
            <img src={flower} alt="Flower" className='w-5 h-5'/>
              <span>Gifts & Flowers</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Gift & Flowers Button */}
      <div className="lg:hidden px-4 py-3 border-t">
        <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-2 ">
            <img src={flower} alt="Flower" className='w-5 h-5'/>
          <span>Gifts & Flowers</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;