import React from 'react';
import TodoList from './TodoList';

class Todo extends React.Component {
	constructor (){
		super();
	}
	render () {
		// console.log("What is this list?");
		return (
		        <div>
		        <TodoList />
		        </div>
			);

	};
};


export default Todo;
