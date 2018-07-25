import React from 'react';

const Todo = ({onClick, name, unique}) => <span className="todo-item" data-id={unique} onClick={onClick} >{name}</span>;

export default Todo;