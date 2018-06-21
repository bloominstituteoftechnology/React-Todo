// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css'
import Todo from './Todo'

const TodoList = (props) => {
  return (
    <div>
      {props.todoItems.map((item) => {
        return (
          <Todo 
            key={Math.random()} 
            singleTodo={item}
          />
        );
      })} 
    </div>
  );
};

export default TodoList


//rops.todos.map((todo) => {
  //return (
    //<Todo
      //key={Math.random()}
     // singleTodo={todo}
    ///>
  ////)
//);
//}