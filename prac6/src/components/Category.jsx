import React from 'react'
import { CategoryContext } from '../context/CategoryContext';
import useCategory from '../hooks/useCategory';

const Category = () => {
  const { showAll, showDoneList, showWorkingList} = useCategory()

  return (
    <div>
      <button onClick={showAll}>전체보기</button>
      <button onClick={showDoneList}>진행중</button>
      <button onClick={showWorkingList}>완료</button>
    </div>
  )
}

export default Category