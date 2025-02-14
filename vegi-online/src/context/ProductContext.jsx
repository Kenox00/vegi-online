// ProductContext.jsx
import { createContext, useReducer } from "react";
import ProductData from '../../data/ProductData.json';
const { Products } = ProductData;


export const ProductContext = createContext();

// Utility function to parse price strings
const parsePrice = (price) => parseInt(price.replace(/,/g, ''), 10);

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        products: action.payload,
      };
    case "FILTER_BY_CATEGORY":
      return {
        products: state.products.filter(product => product.category === action.payload),
      };
    case "SEARCH_PRODUCTS":
      return {
        products: state.products.filter(product => 
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "SORT_BY_PRICE":
      return {
        products: [...state.products].sort((a, b) => {
          const priceA = parsePrice(a.price);
          const priceB = parsePrice(b.price);
          return action.payload === 'asc' ? priceA - priceB : priceB - priceA;
        }),
      };
    case "RESET_PRODUCTS":
      return {
        products: Products, // Reset to the original product data
      };
    default:
      console.warn(`Unknown action type: ${action.type}`);
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: Products, // Initialize with the imported product data
  });

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;