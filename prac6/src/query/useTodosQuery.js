import React from 'react';
import { useMutation } from 'react-query';
import { addTodo, deleteTodo, toggleCheckbox } from '../api/todos';

export const useTodosQuery = () => {
  const addMutation = useMutation(addTodo);
  const deleteMutation = useMutation(deleteTodo);
  const checkboxMutation = useMutation(toggleCheckbox);

  return { addMutation, deleteMutation, checkboxMutation };
};
