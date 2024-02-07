import React from 'react';
import { useCategory } from '../hooks/useCategory';

const Category = () => {
  const { showAllList, showWorkingList, showDoneList } = useCategory();
  return (
    <div>
      <button onClick={showAllList}>전체보기</button>
      <button onClick={showWorkingList}>진행중</button>
      <button onClick={showDoneList}>완료</button>
    </div>
  );
};

export default Category;
