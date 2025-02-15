// First, create a new hook called useSearch.js
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    } else {
      navigate('/products');
    }
  }, [navigate]);

  return {
    searchQuery,
    setSearchQuery,
    handleSearch
  };
};