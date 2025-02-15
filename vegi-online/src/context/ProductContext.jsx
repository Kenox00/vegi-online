import React, { createContext, useReducer, useEffect } from 'react';
import ProductData from '../../data/ProductData.json';
const { Products } = ProductData;

export const ProductContext = createContext();

const parsePrice = (price) => parseInt(price.replace(/,/g, ''), 10);

const initialState = {
  products: Products,
  filteredProducts: Products,
  selectedProduct: localStorage.getItem('selectedProduct') 
    ? JSON.parse(localStorage.getItem('selectedProduct'))
    : null,
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_PRODUCT':
      localStorage.setItem('selectedProduct', JSON.stringify(action.payload));
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case 'FILTER_BY_CATEGORY':
      if (!action.payload) {
        return {
          ...state,
          filteredProducts: state.products,
        };
      }
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.category === action.payload
        ),
      };
    case 'SEARCH_PRODUCTS':
      return {
        ...state,
        filteredProducts: state.products.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case 'SORT_BY_PRICE':
      return {
        ...state,
        filteredProducts: [...state.filteredProducts].sort((a, b) => {
          const priceA = parsePrice(a.price);
          const priceB = parsePrice(b.price);
          return action.payload === 'asc' ? priceA - priceB : priceB - priceA;
        }),
      };
    case 'RESET_PRODUCTS':
      return {
        ...state,
        filteredProducts: state.products,
      };
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    if (!state.selectedProduct && window.location.pathname === '/products/details') {
      const productId = new URLSearchParams(window.location.search).get('id');
      if (productId) {
        const product = Products.find((p) => p.id.toString() === productId);
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

export default ProductProvider;