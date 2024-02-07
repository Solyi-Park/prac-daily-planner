import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import Category from '../components/Category';
import useCategory from '../hooks/useCategory';

const Home = () => {
  const { isWorkingListShown, isDoneListShown } = useCategory();
  return (
    <div>
      <Header>Header</Header>
      <main>
        <Input />
        <Category />
        {isWorkingListShown && <TodoList isDone={false} />}
        {isDoneListShown && <TodoList isDone={true} />}
      </main>
      <Footer>Footer</Footer>
    </div>
  );
};

const Header = styled.div`
  background-color: #ffe7a6;
`;
const Footer = styled.div`
  background-color: #c6a6ff;
`;

export default Home;
