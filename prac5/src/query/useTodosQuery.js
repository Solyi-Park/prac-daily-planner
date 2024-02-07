import React from 'react';
import { useMutation } from 'react-query';
import { addTodo, removeTodo, toggleCheckBox } from '../api/todos';

const useTodosQuery = () => {
  const addMutation = useMutation(addTodo);
  const removeMutation = useMutation(removeTodo);
  const checkboxMutation = useMutation(toggleCheckBox);

  return { addMutation, removeMutation, checkboxMutation };
};

export default useTodosQuery;
