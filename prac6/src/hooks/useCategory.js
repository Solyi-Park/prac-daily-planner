import React, { useContext } from 'react';
import { CategoryContext } from '../context/CategoryContext';

const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};

export default useCategory;
