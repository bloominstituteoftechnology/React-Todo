import React from 'react';
import ToDoList from './ToDoList.js';

const App = () => (
  <div>
    <h2 >Todo App</h2>
    <div>
       
        <input type="checkbox" id="coding" name="interest" value="coding" />
    </div>
    <ToDoList />
  </div>
);

export default App;
