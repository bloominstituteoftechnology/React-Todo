import React from 'react';

const ListItem = (props) => {
  const toggleComplete = () => {
    props.handleToggle(props.todo);
  };

  const removeTodo = () => {
    props.removeTodo(props.todo);
  };
  return (
    <li className={props.todo.isCompleted ? "todo-completed todo-item" : "todo-item"}>
        <button
          className="btn btn-complete"
          onClick={toggleComplete}
          >&#10004;</button>
        <p className="todo-text">{props.todo.text}</p>
        <button className="btn btn-del" onClick={removeTodo}>Remove</button>
    </li>
  );
};

export default ListItem;
