// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';



const TodoList = props => {

  const todoList = props.todos.map((todo,index) => {

    return <Todo key = {props.todoList[index].id} listClickFunction = {()=>props.function(index,props.className)} listClass ={props.todoList[index].completed ? 'completed-todo': ""} identifier = {props.todoList[index].id} content = {props.todoList[index].task}  />
  });
  return(

    <ul className ={props.showResults ? "hidden": ""}>{todoList}</ul>

  );
}



export default TodoList;
