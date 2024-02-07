import React, { useState } from 'react';
import uuid from 'react-uuid';
import { addMutation, useTodosQuery } from '../query/useTodosQuery';
import { useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../query/keys.constant';

const Input = () => {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const { addMutation } = useTodosQuery();
  const { mutate: addMutate } = addMutation;

  const handleContentChange = (e) => setContent(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      content,
      isChecked: false
    };
    addMutate(newTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS);
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input value={content} onChange={handleContentChange} type="text" />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default Input;
