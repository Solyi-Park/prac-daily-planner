import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteTodo, getTodos, toggleCheckBox } from '../api/todos';
import styled from 'styled-components';

export const TodoList = ({ isDone }) => {
  const { data: todos } = useQuery('todos', getTodos);

  const queryClient = useQueryClient();
  const checkBoxMutation = useMutation(toggleCheckBox, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onError: (err) => {
      console.log(err);
    }
  });

  const handleCheckBoxClick = (item) => {
    checkBoxMutation.mutate(item);
  };
  const handleDeleteTodo = (item) => {
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
              <input type="checkBox" checked={item.isChecked} onChange={() => handleCheckBoxClick(item)} />
              <p>{item.content}</p>
              <button onClick={() => handleDeleteTodo(item)}>삭제</button>
            </Todo>
          );
        })
      ) : isDone ? (
        <p>아직 끝난 일이 없어요! 오늘도 집중해서 할 일을 제때 끝내보아요!</p>
      ) : (
        <p>장하다! 오늘 할 일 끝!</p>
      )}
    </>
  );
};

const Todo = styled.div`
  display: flex;
`;
