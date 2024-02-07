import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { QUERY_KEYS } from '../query/keys.constant';
import { getTodos } from '../api/todos';
import { useTodosQuery } from '../query/useTodosQuery';

const TodoList = ({ isDone }) => {
  const queryClient = useQueryClient();
  const { deleteMutation, checkboxMutation } = useTodosQuery();
  const { mutate: deleteMutate } = deleteMutation;
  const { mutate: checkboxMutate } = checkboxMutation;

  const { isLoading, data: todos } = useQuery(QUERY_KEYS.TODOS, getTodos);
  if (isLoading) {
    return <h2>로딩중입니다.</h2>;
  }
  const filteredTodos = todos?.filter((todo) => todo.isChecked === isDone);

  const handleCheckboxChange = (item) => {
    checkboxMutate(item, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS);
      }
    });
  };

  const handleDeleteButtonClick = (id) => {
    deleteMutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS);
      }
    });
  };

  return (
    <div>
      <h1>{isDone ? 'Done' : 'Working'}</h1>
      <ul>
        {filteredTodos?.length > 0 ? (
          filteredTodos.map((item) => {
            return (
              <Todo key={item.id}>
                <input checked={item.isChecked} onChange={() => handleCheckboxChange(item)} type="checkBox" />
                <p>{item.content}</p>
                <button onClick={() => handleDeleteButtonClick(item.id)} type="button">
                  삭제
                </button>
              </Todo>
            );
          })
        ) : isDone ? (
          <p>빨리 안하고 뭐혀! 싸게싸게 움짐여</p>
        ) : (
          <p>장하다!! 할 일 끝!</p>
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
