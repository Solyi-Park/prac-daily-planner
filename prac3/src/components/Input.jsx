import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import uuid from 'react-uuid';
import { addTodo } from '../api/todos';

export const Input = () => {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  const handleChangeContent = (e) => setContent(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      content,
      isChecked: false
    };
    addTodoMutation.mutate(newTodo);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input value={content} onChange={handleChangeContent} type="text" />
        <input type="submit" value="추가하기" />
      </form>
    </>
  );
};
