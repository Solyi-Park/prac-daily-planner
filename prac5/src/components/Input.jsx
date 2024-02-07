import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import uuid from 'react-uuid';
import { addTodo } from '../api/todos';
import { QUERY_KEYS } from '../query/keys.constant';
import useTodosQuery from '../query/useTodosQuery';

const Input = () => {
  const [content, setContent] = useState('');

  const queryClient = useQueryClient();

  const { addMutation } = useTodosQuery();
  const { mutate: addMutate } = addMutation;

  const handleOnSubmit = () => {
    const newTodo = {
      id: uuid(),
      content,
      isChecked: false
    };

    addMutate(newTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS)
      }
    });
  };

  const handleContentChange = (e) => setContent(e.target.value);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input value={content} type="text" onChange={handleContentChange} />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default Input;
