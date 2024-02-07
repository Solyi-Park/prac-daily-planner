import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addTodo } from '../api/todos';
import uuid from 'react-uuid';

const Input = () => {
  const [content, setContent] = useState('');
  
  const queryClient = useQueryClient();
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onError: (err) => {
      console.log(err);
    }
  });

  const handleContentChange = (e) => setContent(e.target.value);
  const handleAddTodoButtonClick = (e) => {
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
      <form onSubmit={handleAddTodoButtonClick}>
        <input value={content} onChange={handleContentChange} />
        <button type="submit">추가하기</button>
      </form>
    </>
  );
};

export default Input;
