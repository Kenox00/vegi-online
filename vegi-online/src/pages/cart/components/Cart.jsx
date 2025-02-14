import { MinusCircle, PlusCircle, XCircle } from "lucide-react";
import { Link } from 'react-router-dom';
import mtn from "../../../assets/images/footer/mtn.png";
import airtel from "../../../assets/images/footer/airtel.png";
import mastercard from "../../../assets/images/footer/mastercard.png";
import paypal from "../../../assets/images/footer/paypal.png";
import { useCart } from "../../../hooks/useCart";

const Cart = () => {
  const { cartItems, updateQuantity, clearCart, totalPrice, removeFromCart } = useCart();

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.product.id, item.quantity - 1);
    }
  };

  const handleIncreaseQuantity = (item) => {
    updateQuantity(item.product.id, item.quantity + 1);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item.product.id);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-2xl font-semibold mb-6 flex items-center gap-2">
        Shopping cart
        <span className="text-gray-500 text-lg">{cartItems.length}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <button
                  className="text-gray-500 cursor-pointer"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  <XCircle size={20} />
                </button>
                <div className="h-12 w-12 relative">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="rounded-lg object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-gray-600">
                    {parseInt(item.product.price.replace(/,/g, ''), 10).toLocaleString()} Rwf
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="text-gray-500"
                    onClick={() => handleDecreaseQuantity(item)}
                  >
                    <MinusCircle size={20} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    className="text-gray-500"
                    onClick={() => handleIncreaseQuantity(item)}
                  >
                    <PlusCircle size={20} />
                  </button>
                </div>

                <div className="text-right min-w-[100px]">
                  {(parseInt(item.product.price.replace(/,/g, ''), 10) * item.quantity).toLocaleString()} Rwf
                </div>
              </div>
            ))}
          </div>

          {/* Back to Shopping */}
          <div className="mt-6 flex items-center gap-4">
            <Link to={"/products"} className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <button className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <span className="text-lg">←</span>
              Go To Shopping
            </button>
            </Link>

            <button className="text-black h-8 bg-gray-200 px-2 cursor-pointer" onClick={clearCart}>
              Empty Cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Cart totals</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Sub total</span>
                <span className="font-medium">
                  {totalPrice.toLocaleString()} Rwf
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-gray-600">Address</h3>
                <p className="text-gray-400 text-sm">
                  Enter your address to view shipping options.
                </p>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Total</span>
                <span className="font-medium">
                  {totalPrice.toLocaleString()} Rwf
                </span>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Proceed To Checkout
              </button>

              <div className="space-y-2">
                <p className="text-gray-600">Our payment methods</p>
                <div className="flex gap-4">
                  <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <img
                      src={mtn}
                      alt="MTN Mobile Money"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <img
                      src={airtel}
                      alt="AIRTEL Mobile Money"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <img
                      src={mastercard}
                      alt="MASTER CARD"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <img
                      src={paypal}
                      alt="PAYPAL"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
