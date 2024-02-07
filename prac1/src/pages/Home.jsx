import React from 'react';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import Input from '../components/Input';

const Home = () => {
  return (
    <>
      <Header>헤더</Header>
      <main>
        <Input />
        <TodoList isDone={false} />
        <TodoList isDone={true} />
      </main>
      <Footer>푸터</Footer>
    </>
  );
};

const Header = styled.div`
  background-color: #efcfcf;
`;

const Footer = styled.div`
  background-color: #d3f9ec;
`;

export default Home;
