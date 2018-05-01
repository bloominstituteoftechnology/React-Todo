import React from 'react';
import { ToDoList } from "./components/ToDoList"
import { ToDo } from "./components/toDo"

const App = () => (
  <div>
    <h2>What Do You Need to Do?</h2>
    <ToDoList />
    <ToDo />
  </div>
);

export default App;
