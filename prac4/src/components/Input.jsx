import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useQueryClient } from 'react-query';
import { useTodosQuery } from '../query/useTodosQuery';
import { QUERY_KEYS } from '../query/keys.constant';

const Input = () => {
  const [content, setContent] = useState('');
  const { addMutation } = useTodosQuery();
  const { mutate: addMutate } = addMutation;
  const queryClient = useQueryClient();

  const handleOnChangeContent = (e) => setContent(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
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

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input value={content} onChange={handleOnChangeContent} type="text" />
        <input type="submit" value="추가하기" />
      </form>
    </div>
  );
};

export default Input;
