import React from 'react';

const Todo = props => <div onClick={() => props.todo.completed = !props.todo.completed} className={ props.todo.completed ? 'completedTodo' : null } key={props.todo.id}>{props.todo.task}</div>;

export default Todo;