import * as api from "../api/index";

export const getTasks = () => async (dispatch) => {
  try {
    const response = await api.getAllTasks();
    // console.log(response.data.data);
    dispatch({ type: "TASKS", payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};

export const postTask = (formData) => async (dispatch) => {
  try {
    
    const response = await api.createTask(formData);
    console.log(response);
    dispatch(getTasks());
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id, formData, ) => async (dispatch) => {
  try {
      
      const response = await api.updateTasks(id, formData);
      
      dispatch(getTasks());
      
      
  } catch (error) {
      console.log(error);
  } 
}

export const updateTaskStatus = (todo_id) => async (dispatch) => {
  try {
      
      await api.updateTasksStaus(todo_id);
      
      dispatch(getTasks());
  } catch (error) {
      console.log(error);
  } 
}

export const deleteTask = (todo_id) => async (dispatch) => {
  try {
      
      await api.deleteTasks(todo_id);
      
      dispatch(getTasks());
      
  } catch (error) {
      console.log(error);
  } 
}
