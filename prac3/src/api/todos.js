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
    const resp = await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async (item) => {
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${item.id}`);
  } catch (err) {
    console.log(err);
  }
};

const toggleCheckBox = async (item) => {
  try {
    const resp = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${item.id}`, {
      isChecked: !item.isChecked
    });
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export { getTodos, addTodo, deleteTodo, toggleCheckBox };
