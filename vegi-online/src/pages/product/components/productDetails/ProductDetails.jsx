import { useEffect, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useProducts } from '../../../../hooks/useProducts';
import ProductData from '../../../../../data/ProductData.json';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { selectedProduct, setSelectedProduct } = useProducts();
  const { Products } = ProductData;

  useEffect(() => {
    if (!selectedProduct) {
      const productId = searchParams.get('id');
      if (productId) {
        const product = Products.find(p => p.id.toString() === productId);
        if (product) {
          setSelectedProduct(product);
        } else {
          navigate('/products');
        }
      } else {
        navigate('/products');
      }
    }
  }, [selectedProduct, searchParams, navigate, setSelectedProduct]);

  if (!selectedProduct) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        Product not found
        <button 
          onClick={() => navigate('/products')}
          className="block mx-auto mt-4 text-primary hover:underline"
        >
          Return to Products
        </button>
      </div>
    );
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const totalPrice = parseFloat(selectedProduct.price.replace(/,/g, '')) * quantity;
  const formattedTotal = totalPrice.toLocaleString();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl mx-auto items-stretch">
        {/* Product Image */}
        <div className="bg-white p-4 border border-gray-200 flex items-center justify-center h-full">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4 border border-gray-200 p-8 h-full flex flex-col justify-between">
          <p className="text-sm text-gray-500 uppercase">{selectedProduct.category}</p>
          <h1 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h1>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">{selectedProduct.price} <span className=" bg-gray-200 p-1 text-sm text-black rounded-lg">rwf</span></span>
            <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">24 IN STOCK</span>
          </div>

          <div>
            <h2 className='text-gray-500'>Description</h2>
            <p className="text-black font-semibold">{selectedProduct.description || 'No description available'}</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Quantity</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button onClick={decrementQuantity} className="px-3 py-1 text-gray-500 hover:text-gray-700">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 text-sm font-medium">{quantity}</span>
              <button onClick={incrementQuantity} className="px-3 py-1 text-gray-500 hover:text-gray-700">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-lg font-medium">
            <span>Total</span>
            <span>{formattedTotal} rwf</span>
          </div>

          <button className="w-full bg-primary text-white py-3 text-lg font-medium hover:bg-orange-600 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
