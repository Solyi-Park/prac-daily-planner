import styled from 'styled-components';
import { Input } from '../components/Input';
import { TodoList } from '../components/TodoList';
import { Category } from '../components/Category';
import { useCategory } from '../hooks/useCategory';

export const Home = () => {
  const { isShownWorking, isShownDone} = useCategory()
  return (
    <>
      <Header>Header</Header>
      <main>
        <Input />
        <Category />
        {isShownWorking && <TodoList isDone={false} />}
        {isShownDone && <TodoList isDone={true} />}
      </main>
      <Footer>Footer</Footer>
    </>
  );
};

const Header = styled.div`
  background-color: #f5c7bf;
`;

const Footer = styled.div`
  background-color: #d3befa;
`;
