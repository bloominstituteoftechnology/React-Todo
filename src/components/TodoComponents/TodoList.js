// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';



const TodoList = props => {

  const todoList = props.todos.map((todo,index) => {

    return <Todo key = {props.todoList[index].id} listClickFunction = {props.function} listClass ={props.className} identifier = {props.todoList[index].id} content = {todo}  />
  });
  return(

    <ul>{todoList}</ul>

  );
}



export default TodoList;
