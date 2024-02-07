import { useMutation } from 'react-query';
import { addTodo, deleteTodo, toggleCheckBox } from '../api/todos';

export const useTodosQuery = () => {
  const addMutation = useMutation(addTodo);
  const deleteMutation = useMutation(deleteTodo);
  const checkBoxMutation = useMutation(toggleCheckBox);

  return { addMutation, deleteMutation, checkBoxMutation };
};
