import React from 'react';
import Todolist from './Todolist';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  color: 'red',
};

const App = () => (
  <div style= {styles}>
    <h2>To Do List</h2>
    <Todolist/>
  </div>
);

export default App;