import React from 'react';
import './Todo.css';
import TodoList from './TodoList';

const Todo = props => {
  return(
    <div>
        {props.items.map(todo => <TodoList strikeThrough={props.strikeThrough} key={todo.id} data={todo}/>)}
    </div> 
   
  );
};

export default Todo;
