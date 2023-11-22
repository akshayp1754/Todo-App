import * as api from '../api/index'

export const signupUser = (authData) => async (dispatch) => {
  try {
    const response = await api.signup(authData);
    dispatch({ type: "AUTH", payload: response.data });
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    console.log(error);
  }
};


export const loginUser = (authData) => async (dispatch) => {
  try {
    const responseData = await api.login(authData);

    dispatch({ type: "AUTH", payload: responseData.data });
    localStorage.setItem("token", responseData.data.token);

    
  } catch (error) {
    console.log(error);
  }
};

export const ValidateUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return;
    const responseData = await api.validate(token);
    if (responseData === null) return;
    // console.log(responseData);
    dispatch({
      type: "AUTH",
      payload: {
        token,
        user: responseData.data.user,
      },
    });
    
  } catch (error) {
    console.log(error);
  }
};
