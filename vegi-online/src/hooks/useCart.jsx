import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const useCart = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  const addToCart = (product, quantity) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product, quantity }
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { productId, newQuantity }
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseInt(item.product.price.replace(/,/g, ''), 10);
    return sum + price * item.quantity;
  }, 0);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  };
};