import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteTodo, getTodos, toggleIsChecked } from '../api/todos';
import styled from 'styled-components';

const TodoList = ({ isDone }) => {
  const queryClient = useQueryClient();
  const { data: todos } = useQuery('todos', getTodos);
  // console.log('todos', todos);

  const checkBoxMutation = useMutation(toggleIsChecked, {
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

  const handleCheckboxChange = (item) => {
    checkBoxMutation.mutate(item);
  };

  const handleDeleteTodo = (item) => {
    deleteTodoMutation.mutate(item);
  };
  const filteredTodos = todos && todos.filter((item) => item.isChecked === isDone);

  return (
    <>
      <h1>{isDone ? 'Done' : 'Working'}</h1>
      <div>
        {todos && filteredTodos.length > 0 ? (
          todos
            .filter((item) => item.isChecked === isDone)
            .map((item) => {
              return (
                <Todo key={item.id}>
                  <input type="checkbox" checked={item.isChecked} onChange={() => handleCheckboxChange(item)} />
                  <p>{item.content}</p>
                  <button type="button" onClick={() => handleDeleteTodo(item)}>
                    삭제
                  </button>
                </Todo>
              );
            })
        ) : isDone ? (
          <p>오늘 할 일을 제때 마쳐보자!</p>
        ) : (
          <p>장하다!오늘은 더 할 일이 읍써!</p>
        )}
      </div>
    </>
  );
};

const Todo = styled.div`
  display: flex;
`;

export default TodoList;
