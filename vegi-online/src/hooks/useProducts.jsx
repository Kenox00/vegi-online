import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';


export const useProducts = () => {
  const { products, dispatch } = useContext(ProductContext);

  const filterByCategory = (category) => {
    dispatch({ type: 'FILTER_BY_CATEGORY', payload: category });
  };

  const searchProducts = (searchTerm) => {
    dispatch({ type: 'SEARCH_PRODUCTS', payload: searchTerm });
  };

  const sortByPrice = (direction) => {
    dispatch({ type: 'SORT_BY_PRICE', payload: direction });
  };

  const resetProducts = () => {
    dispatch({ type: 'RESET_PRODUCTS' });
  };

  return {
    products,
    filterByCategory,
    searchProducts,
    sortByPrice,
    resetProducts
  };
};