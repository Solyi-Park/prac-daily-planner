import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { deleteTodo, getTodos, toggleCheckBox } from '../api/todos';

export const TodoList = ({ isDone }) => {
  const { data: todos } = useQuery('todos', getTodos);

  const queryClient = useQueryClient();
  const checkBoxMutation = useMutation(toggleCheckBox, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onError: (err) => {
      console.log(err);
    }
  });
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  const handleCheckBox = (item) => {
    checkBoxMutation.mutate(item);
  };

  const handelDeleteBtnClick = (item) => {
    deleteTodoMutation.mutate(item);
  };

  const filteredTodos = todos && todos.filter((todo) => todo.isChecked === isDone);

  return (
    <>
      <h1>{isDone ? 'Done' : 'Working'}</h1>
      {todos && filteredTodos.length > 0 ? (
        filteredTodos.map((item) => {
          return (
            <Todo key={item.id}>
              <input type="checkBox" checked={item.isChecked} onChange={() => handleCheckBox(item)} />
              <Content $isChecked={item.isChecked}>{item.content}</Content>
              <button type="button" onClick={() => handelDeleteBtnClick(item)}>
                삭제
              </button>
            </Todo>
          );
        })
      ) : isDone ? (
        <p>오늘 할 일 제 때 끝내보자!</p>
      ) : (
        <p>장하다! 오늘 할 일 끝!</p>
      )}
    </>
  );
};

const Todo = styled.div`
  display: flex;
`;

const Content = styled.div`
  ${(prop) => prop.$isChecked && 'text-decoration: line-through'}
`;
