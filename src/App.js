import React from 'react';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

const list = [];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList />
				<TodoForm />
			</div>
		);
	}
}

export default App;
