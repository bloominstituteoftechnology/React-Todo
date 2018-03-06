import React from 'react';
import TodoList from './components/TodoList';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const h2styles = {
  color: 'lightblue'
};

const App = () => (
  <div style={styles}>
    <h2 style={h2styles}>Todo App</h2>
    <TodoList />
  </div>
);

export default App;
