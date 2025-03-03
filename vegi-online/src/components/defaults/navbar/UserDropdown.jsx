import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Settings, LogOut, Package, User } from 'lucide-react';

const UserDropdown = ({ userName = "Mugisha Sam" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 hover:text-secondary cursor-pointer"
      >
        <div className="w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={20} className="text-gray-600" />
          </div>
        </div>
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Account</p>
          <Link to={'/login'}>
          <p className="font-medium text-sm sm:text-base">Log in</p>
          </Link>
          
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <Link to="/profile" className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={20} className="text-gray-600" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">Welcome Back</p>
                <p className="text-sm text-gray-600">{userName}</p>
              </div>
            </Link>
          </div>

          <div className="py-1">
            <Link 
              to="/orders" 
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Package size={16} />
              <span>My orders</span>
            </Link>
            
            <Link 
              to="/profile" 
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <User size={16} />
              <span>My profile</span>
            </Link>
            
            <Link 
              to="/settings" 
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Settings size={16} />
              <span>Settings</span>
            </Link>
          </div>

          <div className="border-t border-gray-100">
            <button 
              onClick={() => console.log('Logout clicked')}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            >
              <LogOut size={16} />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

UserDropdown.propTypes = {
  userName: PropTypes.string,
};

export default UserDropdown;

