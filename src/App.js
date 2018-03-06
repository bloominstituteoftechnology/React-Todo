import React from 'react';
//import TodoList from './components/TodoList';

const styles = {
  margin: "20px",
  padding: "20px",
  textAlign: 'center'
};

const App = () => (
  <div style={styles}>
    <h2>Todo App</h2>
    <TodoList />
  </div>
);


export default App;
