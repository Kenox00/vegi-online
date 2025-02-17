import { Facebook, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import logo from '../../../assets/images/footer/footerlogo.png';
import appstore from '../../../assets/images/footer/appstore.png';
import playstore from '../../../assets/images/footer/playstore.png';
import mtn from '../../../assets/images/footer/mtn.png';
import airtel from '../../../assets/images/footer/airtel.png';
import mastercard from '../../../assets/images/footer/mastercard.png';
import paypal from '../../../assets/images/footer/paypal.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-6 lg:pb-8 z-1000">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="Vegi Online Logo" className="h-8 sm:h-10" />
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Amet consectetur nulla diam sit mi enim urna mi lacus. 
              Orci vestibulum urna et urna dictumst. 
              Sollicitudin amet orci facilisis vulputate. Augue.
            </p>
          </div>

          {/* My Account */}
          <div className="mt-4 sm:mt-0">
            <h2 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">My account</h2>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Contact Us</li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Faq</li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">My Cart</li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Wish List</li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Orders</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="mt-4 sm:mt-0">
            <h2 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Categories</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <ul className="flex gap-4 flex-col sm:flex-row flex-1">
                <div className="space-y-2 sm:space-y-3 flex-1">
                  <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Fruits & Vegetables</li>
                  <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Dairy & Eggs</li>
                  <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Meat & Seafood</li>
                  <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Bakery</li>
                  <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Pantry Staples</li>
                </div>

                <div className="space-y-2 sm:space-y-3 flex-1">
                  <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Beverages</li>
                  <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Snacks</li>
                  <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Health & Wellness</li>
                  <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Pet Supplies</li>
                  <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm sm:text-base">Grains, Seeds & Legumes</li>
                </div>
              </ul>
            </div>
          </div>

          {/* Mobile App */}
          <div className="mt-4 sm:mt-0">
            <h2 className="font-semibold text-base sm:text-lg mb-2">Mobile App</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Buy a Prepared Meal With Our Mobile app</p>
            <div className="space-y-3">
              <img src={appstore} alt="App Store" className="cursor-pointer w-32 sm:w-40" />
              <img src={playstore} alt="Google Play" className="cursor-pointer w-32 sm:w-40" />
            </div>
          </div>
        </div>

        {/* Contact Info & Social Links */}
        <div className="border border-gray-200 my-6 sm:my-8 p-4 sm:p-6 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Social Links */}
            <div className="text-center sm:text-left">
              <h2 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Social links</h2>
              <div className="flex gap-4 justify-center sm:justify-start">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-700 cursor-pointer" />
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-pink-600 cursor-pointer" />
              </div>
            </div>

            {/* Contact Items */}
            {[
              { icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />, title: "Our Office", content: "gikondo, nyarugenge kk 737" },
              { icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />, title: "Email", content: "vegionline@gmail.com" },
              { icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />, title: "Phone number", content: "078*668*55" }
            ].map((item, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 justify-center items-center">
                {item.icon}
                <div>
                  <p className="text-gray-600 text-sm sm:text-base">{item.title}</p>
                  <p className="text-gray-900 text-sm sm:text-base">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">© 2024 vegionline. All Rights Reserved</p>

            {/* Payment Methods */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <p className="text-gray-600 text-sm sm:text-base">Our payment methods</p>
              <div className="flex gap-3">
                <img src={mtn} alt="MTN" className="h-3 sm:h-4" />
                <img src={airtel} alt="Airtel" className="h-3 sm:h-4" />
                <img src={mastercard} alt="Mastercard" className="h-3 sm:h-4" />
                <img src={paypal} alt="PayPal" className="h-3 sm:h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;