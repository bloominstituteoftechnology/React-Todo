// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
// import '.Todo.css';
import Todo from './Todo';

const TodoList = (props)=> {
  return(
          <ul class='todo-list'>
              {props.todoList.map(task =>{
                  return(
                      <Todo
                          itemCompleted={props.itemCompleted}
                          id={task.id}
                          task={task.task}
                          completed={task.completed}
                      />
                  );
              })}
          </ul>
      );
  }


export default TodoList;
