import React, { useState } from 'react';
import { CategoryContext } from './CategoryContext';

export const CategoryProvider = ({ children }) => {
  const [isActiveWorkingList, setIsActiveWorkingList] = useState(true);
  const [isActiveDoneList, setIsActiveDoneList] = useState(true);

  const showAllList = () => {
    setIsActiveWorkingList(true);
    setIsActiveDoneList(true);
  };
  const showWorkingList = () => {
    setIsActiveWorkingList(true);
    setIsActiveDoneList(false);
  };
  const showDoneList = () => {
    setIsActiveWorkingList(false);
    setIsActiveDoneList(true);
  };
  return (
    <CategoryContext.Provider
      value={{
        isActiveWorkingList,
        isActiveDoneList,
        showAllList,
        showWorkingList,
        showDoneList
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
