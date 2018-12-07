// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	return <ul>{props.todo.map((todo, i, id) => <Todo key={i} id={id} todo={todo} />)}</ul>;
};

export default TodoList;
