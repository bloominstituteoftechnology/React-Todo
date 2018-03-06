import React from 'react';
import TodoList from './components/TodoList';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <div style={styles}>
    <h2>Todo App</h2>
    <TodoList />
  </div>
);

export default App;
