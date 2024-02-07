import React, { useState } from 'react';
import CategoryContext from '../contexts/CategoryContext';

export const CategoryProvider = ({ children }) => {
  const [isShownWorking, setIsShownWorking] = useState(true);
  const [isShownDone, setIsShownDone] = useState(true);

  const handleAllButtonClick = () => {
    setIsShownWorking(true);
    setIsShownDone(true);
  };
  const handleWorkingButtonClick = () => {
    setIsShownWorking(true);
    setIsShownDone(false);
  };
  const handleDoneButtonClick = () => {
    setIsShownWorking(false);
    setIsShownDone(true);
  };

  return (
    <CategoryContext.Provider value={{ isShownWorking, isShownDone, handleAllButtonClick, handleWorkingButtonClick, handleDoneButtonClick }}>
      {children}
    </CategoryContext.Provider>
  );
};
