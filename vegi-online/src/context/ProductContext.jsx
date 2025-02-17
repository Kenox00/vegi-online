/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useEffect } from "react";
import ProductData from '../../data/ProductData.json';
const { Products } = ProductData;

export const ProductContext = createContext();

const parsePrice = (price) => parseInt(price.replace(/,/g, ''), 10);

// Initialize state with data from localStorage if available
const initialState = {
  products: Products,
  selectedProduct: localStorage.getItem('selectedProduct') 
    ? JSON.parse(localStorage.getItem('selectedProduct'))
    : null,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_SELECTED_PRODUCT":
      // Store in localStorage when setting selected product
      localStorage.setItem('selectedProduct', JSON.stringify(action.payload));
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        products: Products.filter(product => product.category === action.payload),
      };
    case "SEARCH_PRODUCTS":
      return {
        ...state,
        products: Products.filter(product => 
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        products: [...state.products].sort((a, b) => {
          const priceA = parsePrice(a.price);
          const priceB = parsePrice(b.price);
          return action.payload === 'asc' ? priceA - priceB : priceB - priceA;
        }),
      };
    case "RESET_PRODUCTS":
      return {
        ...state,
        products: Products,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Recover selected product from URL if not in state
  useEffect(() => {
    if (!state.selectedProduct && window.location.pathname === '/products/details') {
      const productId = new URLSearchParams(window.location.search).get('id');
      if (productId) {
        const product = Products.find(p => p.id.toString() === productId);
        if (product) {
          dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product });
        }
      }
    }
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;