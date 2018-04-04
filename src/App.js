import React from 'react';
import ToDo from './ToDoComp';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  color: 'red',
};

const App = () => (
  <div style= {styles}>
    <h2>To Do List</h2>
    <ToDo/>
  </div>
);

export default App;