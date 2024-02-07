import React from 'react';
import { useCategory } from '../hooks/useCategory';

export const Category = () => {
  const { handleAllButtonClick, handleWorkingButtonClick, handleDoneButtonClick } = useCategory();
  return (
    <div>
      <button onClick={handleAllButtonClick}>전체보기</button>
      <button onClick={handleWorkingButtonClick}>진행중</button>
      <button onClick={handleDoneButtonClick}>완료</button>
    </div>
  );
};
