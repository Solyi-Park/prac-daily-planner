import React from 'react';
import { Input } from '../components/Input';
import { TodoList } from '../components/TodoList';
import styled from 'styled-components';
import { CategoryButtons } from '../components/Category';
import { useCategory } from '../hooks/useCategory';

export const Home = () => {
  const {showWorkingList, showDoneList } = useCategory();

  return (
    <>
      <Header>헤더</Header>
      <main>
        <Input />
        <CategoryButtons />
        {showWorkingList && <TodoList isDone={false} />}
        {showDoneList && <TodoList isDone={true} />}
      </main>
      <Footer>푸터</Footer>
    </>
  );
};

const Header = styled.div`
  background-color: #fadafa;
`;
const Footer = styled.div`
  background-color: #dfdffb;
`;
