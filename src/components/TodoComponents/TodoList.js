// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
let todos = props.todoList; //.map(todo => {
console.log(todos);
// return <Todo key={todo.id} todoData={todo} />
// });

// const storedTodo = JSON.parse(localStorage.getItem('todos'));
// if(storedTodo && storedTodo.length) {
//     todos = storedTodo;
// }else {
//     localStorage.setItem('todos', JSON.stringify(props.todoList));
// }




  return (
    <div>
        {
            todos.map(todo => {

                return <Todo key={todo.id} todoData={todo} />
            })
        }
    </div>
  );
};

export default TodoList;
