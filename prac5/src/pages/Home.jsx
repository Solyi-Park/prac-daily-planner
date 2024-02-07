import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import Category from '../components/Category';
import { useCategory } from '../hooks/useCategory';

const Home = () => {
  const { isActiveWorkingList, isActiveDoneList } = useCategory();
  return (
    <>
      <Header>Header</Header>
      <main>
        <Input />
        <Category />
        {isActiveWorkingList && <TodoList isDone={false} />}
        {isActiveDoneList && <TodoList isDone={true} />}
      </main>
      <Footer>Footer</Footer>
    </>
  );
};

const Header = styled.div`
  background-color: #fa96a5;
`;

const Footer = styled.div`
  background-color: #9575d1;
`;

export default Home;
