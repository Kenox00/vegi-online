import { createContext, useReducer, useEffect } from "react";

const initialState = {
  cartItems: localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
};

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
        const existingItem = state.cartItems.find(
          item => item.product.id === action.payload.product.id
        );
        
        if (existingItem) {
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.product.id === action.payload.product.id
                ? { ...item, quantity: item.quantity + action.payload.quantity }
                : item
            )
          };
        }
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.product.id !== action.payload
        )
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.newQuantity }
            : item
        )
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;