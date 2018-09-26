import React from 'react';

// / - `<Todo />` is a component that takes in the`todo` data and displays the task to the screen.
const Todo = props => {
	return props.list.map((item, id) => <li key={id}>{item.task}</li>);
};

export default Todo;
