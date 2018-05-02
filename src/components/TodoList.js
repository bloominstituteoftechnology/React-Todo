// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo) => {
          console.log("inside todo", todo);
          if(todo.completed){
            return (
                <li key={todo.id}>
                    <button className="white-btn green-btn fa fa-thumbs-up" onClick={ () => {props.completedTodo(todo.id)} }></button>
                        {todo.task}
                    <div className="strike-line"></div>
                    <button className="white-btn trash-btn fa fa-trash-o" onClick={ () => {props.removeTodo(todo.id)} }></button>
                </li>
            )
          }else {
            return (
                <li key={todo.id} >
                    <button className="white-btn gray-btn fa fa-thumbs-up" onClick={ () => {props.completedTodo(todo.id)} }></button>
                        {todo.task}
                    <button className="white-btn trash-btn fa fa-trash-o" onClick={ () => {props.removeTodo(todo.id)} }></button>

                </li>
            )
          }
      })}
    </ul>
  );
};

export default TodoList;