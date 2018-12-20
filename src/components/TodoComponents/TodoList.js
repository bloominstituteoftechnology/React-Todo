// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';



const TodoList = props => {

  const todoList = props.todos.map((todo,index) => {
    console.log('creating todoslist' + index)
    console.log(props.todoList[index].completed);


    console.log(props.todoList[index].completed ? "completed" : "todo")
    console.log(props.todoList[index].completed)
    console.log(typeof props.todoList[index].completed)

    return <Todo key = {props.todoList[index].id} listClickFunction = {()=>props.function(index)} listClass ={props.todoList[index].completed ? 'completed-todo': "todo"} identifier = {props.todoList[index].id} content = {props.todoList[index].task}  />
  });

  return(

    <ul className ={props.showResults ? "hidden": "todo-list"}>{todoList}</ul>

  );
}



export default TodoList;
