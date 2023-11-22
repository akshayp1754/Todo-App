const initialState = [];

const taskReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case "TASKS":
      return payload;
    default:
      return state;
  }
};

export default taskReducer;
