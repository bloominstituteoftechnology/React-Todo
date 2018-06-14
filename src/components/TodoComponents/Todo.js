 // <Todo /> is a component that takes in the todo data and displays the task to the screen.
 import React from 'react';
 import TodoForm from "./TodoForm";
 import './Todo.css';

 class Todo extends React.Component {
     constructor() {
         super();

     }

     render() {
         return (
             <div>
                <div>
                    <h1>Todo List </h1>
                </div>
                <div className = "headings">
                    <h3> Task </h3>
                    <h3> ID </h3>
                    <h3> Completed </h3>
                </div>
            </div>
         );
     };
 }


 export default Todo;