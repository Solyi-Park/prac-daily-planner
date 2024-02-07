import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import uuid from 'react-uuid';
import { addTodo } from '../api/todos';

export const Input = () => {
  const [todo, setTodo] = useState('');

  const queryClient = useQueryClient();
  const AddTodoMutation = useMutation(addTodo, {
    onSuccess: () =>{
      queryClient.invalidateQueries('todos')
    },
    onError: (err) =>{
      console.log(err)
    }
  })

  const handleTodoChange = (e) => setTodo(e.target.value);
  const handleAddTodoButton = () => {
    const newTodo = {
      id: uuid(),
      content: todo,
      isChecked: false
    };
    AddTodoMutation.mutate(newTodo)
  };

  return (
    <>
      <form>
        <input value={todo} onChange={handleTodoChange} type="text" />
        <button onClick={handleAddTodoButton}>추가하기</button>
      </form>
    </>
  );
};
