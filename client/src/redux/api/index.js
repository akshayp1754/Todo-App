import axios from "axios";
import store from "../store";

export const API = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: {},
});

// Request interceptor to add an authorization header for authenticated requests
API.interceptors.request.use(
    (req) => {
      // const auth = store.getState().authReducer.token;
      const auth = localStorage.getItem("token")
      // console.log(auth);
      if (auth) {
        req.headers.authorization = `Bearer ${auth}`;
      }
      return req;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

export const signup = (authData) => API.post("/auth/signup", authData);
export const login = (authData) => API.post("/auth/login", authData);
export const validate = (token) => API.get(`/auth/validate/${token}`);

export const createTask = (formData) => API.post("/task", formData);
export const getAllTasks = () => API.get("/task");
export const deleteTasks = (todo_id) => API.delete(`/task/${todo_id}`);
export const updateTasksStaus = (todo_id) =>
  API.patch(`/task/status/${todo_id}`);
export const updateTasks = (id, formData) =>
  API.patch(`/task/todo/${id}`, formData);
