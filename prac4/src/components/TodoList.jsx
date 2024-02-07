import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { getTodos } from '../api/todos';
import { useTodosQuery } from '../query/useTodosQuery';
import { QUERY_KEYS } from '../query/keys.constant';
const TodoList = ({ isDone }) => {
  const { data: todos } = useQuery('todos', getTodos);

  const queryClient = useQueryClient();

  const { deleteMutation, checkBoxMutation } = useTodosQuery();
  const { mutate: checkboxMutate } = checkBoxMutation;
  const { mutate: deleteMutate } = deleteMutation;

  const handleCheckboxChange = (item) => {
    checkboxMutate(item, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS);
      }
    });
  };

  const handleDeleteTodo = (item) => {
    deleteMutate(item, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS);
      }
    });
  };

  const filteredTodos = todos && todos.filter((todo) => todo.isChecked === isDone);

  return (
    <div>
      {isDone ? 'Done' : 'Working'}
      <ul>
        {filteredTodos?.length > 0 ? (
          filteredTodos.map((item) => {
            return (
              <Todo key={item.id}>
                <input checked={item.isChecked} type="checkBox" onChange={() => handleCheckboxChange(item)} />
                <p>{item.content}</p>
                <button onClick={() => handleDeleteTodo(item)}>삭제</button>
              </Todo>
            );
          })
        ) : isDone ? (
          <p>제때 끝내보자!</p>
        ) : (
          <p>할일 끝</p>
        )}
      </ul>
    </div>
  );
};

const Todo = styled.li`
  display: flex;
  align-items: center;
`;

export default TodoList;
