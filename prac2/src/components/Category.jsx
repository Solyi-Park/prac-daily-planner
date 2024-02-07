import { useCategory } from '../hooks/useCategory';

export const CategoryButtons = () => {
  const { handleAllButton, handleWorkingListButton, handleDoneListButton } = useCategory();

  return (
    <>
      <button onClick={handleAllButton}>전체보기</button>
      <button onClick={handleWorkingListButton}>진행중</button>
      <button onClick={handleDoneListButton}>완료</button>
    </>
  );
};
