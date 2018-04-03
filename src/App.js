import React from 'react';
import ToDolist from './ToDoList';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

const App = () => (
  <div style={styles}>
    <h2>To do App</h2>
    <ToDolist />
  </div>
);



export default App;