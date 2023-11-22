const initialState = {
  token: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case "AUTH":
      return { ...state, ...payload };
    case "LOGOUT":
      localStorage.clear();
      return { ...initialState};
    default:
      return state;
  }
};

export default authReducer;
