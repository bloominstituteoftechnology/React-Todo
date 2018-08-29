import React from 'react';
// import './App.css';
import ToDoFormContainer from './TodoForm';
import ToDoContainer from './Todo';

const ToDoList = () => {
  return (
    <div className = "ToDoListContainer">
      <ToDoFormContainer />
      <ToDoContainer />
    </div>
  );
};

export default ToDoList;