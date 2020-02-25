import React, { useReducer } from 'react';
import { itemReducer, initialState } from '../reducers/reducer';

const Todo = () => {

    const [state, dispatch ] = useReducer(itemReducer, initialState);

  return (
    <div
      style={state.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => dispatch({ type: "TOGGLE_COMPLETE"})}
    >
      {state.initialState}
    </div>
  );
};

export default Todo;