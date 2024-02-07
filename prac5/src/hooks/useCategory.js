import React, { useContext } from 'react'
import { CategoryContext } from '../context/CategoryContext';

export const useCategory = () => {

    const context = useContext(CategoryContext)
    if (!context) {
        throw new Error('error')
    }
  return context;
}
