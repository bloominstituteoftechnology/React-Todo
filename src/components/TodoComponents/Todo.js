 // <Todo /> is a component that takes in the todo data and displays the task to the screen.
 import React from 'react';
 import TodoForm from "./TodoForm"

 class Todo extends React.Component {
     constructor() {
         super();

     }

     render() {
         return (
             <p> - {this.props.todoTask} </p>
         );
     };
 }


 export default Todo;