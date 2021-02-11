import React from 'react';
import './Todo.css';
// import components
import Todo from './Todo';




const TodoList = props => {

  return (
    <div className="todo-list">
        {props.todos.map(todo => {
          console.log("TODOLIST TODO: ", todo);
        return <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} />
        })}


    </div>
  );
};

export default TodoList