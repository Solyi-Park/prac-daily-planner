import React, { useState } from 'react';
import { CategoryContext } from './CategoryContext';

  const ContextProvider = ({ children }) => {
  const [isWorkingListShown, setIsWorkingListShown] = useState(true);
  const [isDoneListShown, setIsDoneListShown] = useState(true);

  const showAll = () => {
    setIsWorkingListShown(true);
    setIsDoneListShown(true);
  };

  const showWorkingList = () => {
    setIsWorkingListShown(true);
    setIsDoneListShown(false);
  };

  const showDoneList = () => {
    setIsWorkingListShown(false);
    setIsDoneListShown(true);
  };

  return (
    <CategoryContext.Provider
      value={{
        isWorkingListShown,
        isDoneListShown,
        showAll,
        showWorkingList,
        showDoneList
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

// export default ContextProvider;