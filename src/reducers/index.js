import { ADD_TASK } from "../actions";

const initialState = {
  taskList: [
    {
      task: "Pre-filled!",
      completed: false
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
