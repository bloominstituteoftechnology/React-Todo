import React, { useReducer } from 'react';
import './App.css';

//components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

//reducers
import { initialState, todoReducer } from './reducers/reducer';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log('use reducer state: ', state)

  return (
    <div className="App">
      <h1>Reducer Todo</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;