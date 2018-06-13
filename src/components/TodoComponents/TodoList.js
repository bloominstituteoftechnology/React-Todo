// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
	return (
		<ul>
			{props.listItems.map(item => {
				return <li key={Date.now()}>{item}</li>;
				})}
		</ul>
	);
};

export default TodoList;
