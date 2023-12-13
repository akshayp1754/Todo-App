import toast from "react-hot-toast";
import * as api from "../api/index";

export const signupUser = (authData) => async (dispatch) => {
  try {
    const response = await api.signup(authData);
    dispatch({ type: "AUTH", payload: response.data });
    localStorage.setItem("token", response.data.token);
    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const loginUser = (authData) => {
  return async (dispatch) => {
    try {
      const response = await api.login(authData);
      const { data: responseData } = response;
      // axios.defaults.headers.common["Authorization"] = `${token}`;
      dispatch({ type: "AUTH", payload: responseData.data });
      localStorage.setItem("token", responseData.data.token);
      toast.success(responseData.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
};

export const ValidateUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return;
    const responseData = await api.validate(token);
    if (responseData === null) return;
    dispatch({
      type: "AUTH",
      payload: {
        token,
        user: responseData.data.data.user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
