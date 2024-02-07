import axios from 'axios';

const getTodos = async () => {
  try {
    const resp = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

const addTodo = async (newTodo) => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async (id) => {
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const toggleCheckbox = async (item) => {
  try {
    await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${item.id}`, { isChecked: !item.isChecked });
  } catch (err) {
    console.log(err);
  }
};

export { getTodos, addTodo, deleteTodo, toggleCheckbox };
