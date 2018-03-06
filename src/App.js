import React from 'react';
import TodoList from './components/TodoList'; // Added

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  color: 'purple'
};

const App = () => (
  <div style={styles}>
    <h2>Todo App</h2>
    <TodoList />
  </div>
);


export default App;
