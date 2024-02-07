import React, { useState } from 'react';

export const useCategory = () => {
  const [showWorkingList, setShowWorkingList] = useState(true);
  const [showDoneList, setShowDoneList] = useState(true);

  const handleAllButton = () => {
    setShowWorkingList(true);
    setShowDoneList(true);
  };
  const handleWorkingListButton = () => {
    setShowWorkingList(true);
    setShowDoneList(false);
  };
  const handleDoneListButton = () => {
    // console.log('완료버튼 연결');
    setShowWorkingList(false);
    setShowDoneList(true);
  };

  return {
    showWorkingList,
    showDoneList,
    handleAllButton,
    handleWorkingListButton,
    handleDoneListButton
  };
};
