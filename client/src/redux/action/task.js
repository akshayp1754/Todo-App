import toast from "react-hot-toast";
import * as api from "../api/index";

export const getTasks = () => async (dispatch) => {
  try {
    const response = await api.getAllTasks();
    // console.log(response.data.data);
    dispatch({ type: "TASKS", payload: response.data.data });
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const postTask = (formData) => async (dispatch) => {
  try {
    const response = await api.createTask(formData);
    console.log(response);
    dispatch(getTasks());
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const updateTask = (id, formData) => async (dispatch) => {
  try {
    const response = await api.updateTasks(id, formData);
    dispatch(getTasks());
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const updateTaskStatus = (todo_id) => async (dispatch) => {
  try {
    const response = await api.updateTasksStaus(todo_id);
    dispatch(getTasks());
    toast.success(response.data.message)
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const deleteTask = (todo_id) => async (dispatch) => {
  try {
    const response = await api.deleteTasks(todo_id);
    dispatch(getTasks());
    toast.success(response.data.message)
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
