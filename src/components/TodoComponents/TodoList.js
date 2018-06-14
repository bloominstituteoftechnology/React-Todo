// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = props => {
    return (
     <div>
      {props.Todo.map(todo => {
        return (
          <Todo
            alertTodo={props.alertItem}
            key={Math.random()}
            singleTodo={todo}
          />
        );
      })}
    </div>
    );
};

export default TodoList;