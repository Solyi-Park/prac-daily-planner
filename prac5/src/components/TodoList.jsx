import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../query/keys.constant';
import { getTodos } from '../api/todos';
import styled from 'styled-components';
import useTodosQuery from '../query/useTodosQuery';

const TodoList = ({ isDone }) => {
  const queryClient = useQueryClient();
  const { removeMutation, checkboxMutation } = useTodosQuery();
  const { mutate: removeMutate } = removeMutation; 
  const { mutate: checkboxMutate } = checkboxMutation;

  const { isLoading, data: todos } = useQuery(QUERY_KEYS.TODOS, getTodos);
  if (isLoading) {
    return <p>로딩중</p>;
  }
  const filteredTodos = todos.filter((todo) => todo.isChecked === isDone);

  const handleCheckboxChange = (item) => {
    checkboxMutate(item, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS);
      }
    });
  };

  const handleRemoveButtonClick = (item) => {
    removeMutate(item, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS);
      }
    });
  };

  return (
    <div>
      {isDone ? 'Done' : 'Working'}
      <ul>
        {filteredTodos?.length > 0 ? (
          filteredTodos.map((item) => {
            return (
              <Card key={item.id}>
                <input checked={item.isChecked} onChange={() => handleCheckboxChange(item)} type="checkBox" />
                <p>{item.content}</p>
                <button onClick={() => handleRemoveButtonClick(item)}>삭제</button>
              </Card>
            );
          })
        ) : isDone ? (
          <p>할 일을 제때 끝내 보자</p>
        ) : (
          <p>장하다!! 오늘 할 일 끝</p>
        )}
      </ul>
    </div>
  );
};

const Card = styled.div`
  display: flex;
`;

export default TodoList;
